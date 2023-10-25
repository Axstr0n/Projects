using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hallway : MonoBehaviour
{
    public string entryName;
    public string exitName;
    public List<string> dockNames;

    public bool isColliding;

    public Vector3 hallwayToEntry;
    public Vector3 hallwayToExit;

    public PrefabsSO prefabsSO;
    public PrefabsSO prefabsSOInstance;
    public List<GameObject> roomPrefabs;
    public GameObject lastRoomPrefab;

    // Start is called before the first frame update
    void Awake()
    {
        InitializeHallway();
    }


    void InitializeHallway()
    {
        string hallwayName = gameObject.name.Replace("(Clone)", "").ToString();

        string dock1 = hallwayName.Substring(hallwayName.Length - 2)[0].ToString();
        string dock2 = hallwayName.Substring(hallwayName.Length - 2)[1].ToString();
        dockNames.Add(dock1);
        dockNames.Add(dock2);
    }

    public void SetupHallway()
    {
        for (int i = 0; i < dockNames.Count; i++)
        {
            if (entryName == dockNames[i]) dockNames.RemoveAt(i);
        }
        exitName = dockNames[0];
        dockNames.RemoveAt(0);
        hallwayToEntry = transform.Find("Docks").Find(entryName).position - transform.position;
        hallwayToExit = transform.Find("Docks").Find(exitName).position - transform.position;
    }
    public void SetRooms()
    {
        prefabsSOInstance = Instantiate(prefabsSO);
        if (FindObjectOfType<OfficeGenerator>().roomsSpawned.Count == FindObjectOfType<OfficeGenerator>().numberOfRooms - 1)
        {
            if (exitName == "T") roomPrefabs = new List<GameObject> { prefabsSOInstance.lastRoomPrefabB };
            else if (exitName == "R") roomPrefabs = new List<GameObject> { prefabsSOInstance.lastRoomPrefabL };
            else if (exitName == "B") roomPrefabs = new List<GameObject> { prefabsSOInstance.lastRoomPrefabT };
            else if (exitName == "L") roomPrefabs = new List<GameObject> { prefabsSOInstance.lastRoomPrefabR };
        }
        else
        {
            if (exitName == "T") roomPrefabs = prefabsSOInstance.roomPrefabsB;
            else if (exitName == "R") roomPrefabs = prefabsSOInstance.roomPrefabsL;
            else if (exitName == "B") roomPrefabs = prefabsSOInstance.roomPrefabsT;
            else if (exitName == "L") roomPrefabs = prefabsSOInstance.roomPrefabsR;
        }
    }





    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.GetComponent<BoxCollider2D>().CompareTag("Room") || collision.GetComponent<BoxCollider2D>().CompareTag("Hallway"))
        {
            isColliding = true;
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.GetComponent<BoxCollider2D>().CompareTag("Room") || collision.GetComponent<BoxCollider2D>().CompareTag("Hallway"))
        {
            isColliding = false;
        }
    }
}
