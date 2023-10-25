using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Room : MonoBehaviour
{
    public bool isFirstRoom;
    public bool isLastRoom;

    public string entryName;
    public string exitName;
    List<string> dockNames;

    public bool isColliding = false;

    public Vector3 roomToEntry;
    public Vector3 roomToExit;

    public PrefabsSO prefabsSO;
    public PrefabsSO prefabsSOInstance;
    public List<GameObject> hallwayPrefabs;

    // Start is called before the first frame update
    void Awake()
    {
        InitializeRoom();
        
    }
    void InitializeRoom()
    {
        dockNames = new List<string>();
        string roomName = gameObject.name.Replace("(Clone)", "").ToString();
        if (isFirstRoom)
        {
            entryName = "";
            exitName = roomName.Substring(roomName.Length - 1).ToString();
            roomToExit = transform.Find("Docks").Find(exitName).position - transform.position;
        }
        else if (isLastRoom)
        {
            entryName = roomName.Substring(roomName.Length - 1).ToString();
            exitName = "";
            roomToEntry = transform.Find("Docks").Find(entryName).position - transform.position;
        }
        else if (!isFirstRoom && !isLastRoom)
        {
            string dock1 = roomName.Substring(roomName.Length - 2)[0].ToString();
            string dock2 = roomName.Substring(roomName.Length - 2)[1].ToString();
            dockNames.Add(dock1);
            dockNames.Add(dock2);
        }
    }


    public void SetupRoom()
    {
        if (isFirstRoom || isLastRoom) return;
        for (int i = 0; i < dockNames.Count; i++)
        {
            if (entryName == dockNames[i]) dockNames.RemoveAt(i);
        }
        exitName = dockNames[0];
        dockNames.RemoveAt(0);
        roomToEntry = transform.Find("Docks").Find(entryName).position - transform.position;
        roomToExit = transform.Find("Docks").Find(exitName).position - transform.position;
    }
    public void SetHallways()
    {
        if (isLastRoom) return;
        prefabsSOInstance = Instantiate(prefabsSO);
        if (exitName == "T") hallwayPrefabs = prefabsSOInstance.hallwayPrefabsB;
        else if (exitName == "R") hallwayPrefabs = prefabsSOInstance.hallwayPrefabsL;
        else if (exitName == "B") hallwayPrefabs = prefabsSOInstance.hallwayPrefabsT;
        else if (exitName == "L") hallwayPrefabs = prefabsSOInstance.hallwayPrefabsR;
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
