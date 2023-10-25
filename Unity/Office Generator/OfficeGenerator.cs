using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class OfficeGenerator : MonoBehaviour
{
    public Transform office;
    public int numberOfRooms = 5;

    public PrefabsSO prefabsSO;
    

    // First rooms
    List<GameObject> firstRoomPrefabs;


    public bool roomsAreSet = false;
    public List<GameObject> roomsSpawned;
    public List<GameObject> hallwaysSpawned;

    public GameObject currentRoom;
    public GameObject currentHallway;

    public float waitTime = 0.1f;

    // Start is called before the first frame update
    void Start()
    {

    }
    
    void GetPrefabs()
    {
        // First rooms
        firstRoomPrefabs = prefabsSO.firstRoomPrefabs;
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.O))
        {
            for (int i = 0; i < office.childCount; i++)
            {
                Destroy(office.GetChild(i).gameObject);
            }
            GetPrefabs();
            GenerateOffice();
        }
    }

    void GenerateOffice()
    {
        currentRoom = null;
        currentHallway = null;
        roomsSpawned = new List<GameObject>();
        hallwaysSpawned = new List<GameObject>();
        AddRoom();
    }

    void AddRoom()
    {
        GameObject roomPrefab = null;
        Vector3 spawnPosition = new Vector3(1000, 1000, 0);
        string roomEntryName = "";
        // First Room
        if (currentRoom == null && roomsSpawned.Count == 0)
        {
            roomPrefab = firstRoomPrefabs[Random.Range(0, firstRoomPrefabs.Count - 1)];
            spawnPosition = Vector3.zero;

            GameObject newRoom = Instantiate(roomPrefab, spawnPosition, Quaternion.identity);
            roomsSpawned.Add(newRoom);
            currentRoom = roomsSpawned[roomsSpawned.Count - 1];
            currentRoom.GetComponent<Room>().entryName = roomEntryName;
            currentRoom.GetComponent<Room>().SetupRoom();
            currentRoom.GetComponent<Room>().SetHallways();
            currentRoom.transform.parent = office;
            StartCoroutine(ExecuteAfterTime(waitTime, "r"));
            return;
        }
        // Room
        else if (currentHallway != null)
        {
            string currentHallwayExit = currentHallway.GetComponent<Hallway>().exitName;
            if (currentHallwayExit == "T") roomEntryName = "B";
            else if (currentHallwayExit == "R") roomEntryName = "L";
            else if (currentHallwayExit == "B") roomEntryName = "T";
            else if (currentHallwayExit == "L") roomEntryName = "R";
        }

        if (currentHallway != null && currentHallway.GetComponent<Hallway>().roomPrefabs.Count > 0)
        {
            int randomRoomIndex = Random.Range(0, currentHallway.GetComponent<Hallway>().roomPrefabs.Count - 1);
            roomPrefab = currentHallway.GetComponent<Hallway>().roomPrefabs[randomRoomIndex];
            currentHallway.GetComponent<Hallway>().roomPrefabs.RemoveAt(randomRoomIndex);

            GameObject newRoom = Instantiate(roomPrefab, spawnPosition, Quaternion.identity);
            roomsSpawned.Add(newRoom);
            currentRoom = roomsSpawned[roomsSpawned.Count - 1];
            currentRoom.GetComponent<Room>().entryName = roomEntryName;
            currentRoom.GetComponent<Room>().SetupRoom();
            currentRoom.GetComponent<Room>().SetHallways();
            if (currentHallway != null) currentRoom.transform.position = currentHallway.transform.position + currentHallway.GetComponent<Hallway>().hallwayToExit - currentRoom.GetComponent<Room>().roomToEntry;
            currentRoom.transform.parent = office;
            StartCoroutine(ExecuteAfterTime(waitTime,"r"));
        }
        else
        {
            Destroy(currentHallway);
            hallwaysSpawned.RemoveAt(hallwaysSpawned.Count - 1);
            currentHallway = hallwaysSpawned[hallwaysSpawned.Count - 1];
            currentRoom = roomsSpawned[roomsSpawned.Count - 1];
            AddHallway();
        }

    }
    void AddHallway()
    {
        string currentRoomExitName = currentRoom.GetComponent<Room>().exitName;
        GameObject hallwayPrefab = null;
        string hallwayEntryName = "";
        
        if (currentRoomExitName == "T") hallwayEntryName = "B";
        else if (currentRoomExitName == "R") hallwayEntryName = "L";
        else if (currentRoomExitName == "B") hallwayEntryName = "T";
        else if (currentRoomExitName == "L") hallwayEntryName = "R";
        
        if (currentRoom.GetComponent<Room>().hallwayPrefabs.Count > 0)
        {
            int randomHallwayIndex = Random.Range(0, currentRoom.GetComponent<Room>().hallwayPrefabs.Count - 1);
            hallwayPrefab = currentRoom.GetComponent<Room>().hallwayPrefabs[randomHallwayIndex];
            currentRoom.GetComponent<Room>().hallwayPrefabs.RemoveAt(randomHallwayIndex);

            GameObject newHallway = Instantiate(hallwayPrefab, new Vector3(100000, 100000, 0), Quaternion.identity);
            hallwaysSpawned.Add(newHallway);
            currentHallway = hallwaysSpawned[hallwaysSpawned.Count - 1];
            currentHallway.GetComponent<Hallway>().entryName = hallwayEntryName;
            currentHallway.GetComponent<Hallway>().SetupHallway();
            currentHallway.GetComponent<Hallway>().SetRooms();
            currentHallway.transform.position = currentRoom.transform.position + currentRoom.GetComponent<Room>().roomToExit - currentHallway.GetComponent<Hallway>().hallwayToEntry;
            currentHallway.transform.parent = office;
            StartCoroutine(ExecuteAfterTime(waitTime, "h"));
        }
        else
        {
            Destroy(currentRoom);
            roomsSpawned.RemoveAt(roomsSpawned.Count - 1);
            currentRoom = roomsSpawned[roomsSpawned.Count - 1];
            currentHallway = hallwaysSpawned[hallwaysSpawned.Count - 1];
            AddRoom();
        }
    }

    IEnumerator ExecuteAfterTime(float time, string objectInicial)
    {
        yield return new WaitForSeconds(time);

        if(objectInicial == "r")
        {
            if (currentRoom != null && currentRoom.GetComponent<Room>().isColliding)
            {
                Destroy(currentRoom);
                roomsSpawned.RemoveAt(roomsSpawned.Count - 1);
                AddRoom();
            }
            else
            {
                if (roomsSpawned.Count < numberOfRooms) AddHallway();
            }
        }
        else if (objectInicial == "h")
        {
            if (currentHallway != null && currentHallway.GetComponent<Hallway>().isColliding)
            {
                Destroy(currentHallway);
                hallwaysSpawned.RemoveAt(hallwaysSpawned.Count - 1);
                AddHallway();
            }
            else
            {
                AddRoom();
            }
        }
    }
}
