using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName ="PrefabsSO",menuName ="Scriptable Objects/PrefabsSO")]
public class PrefabsSO : ScriptableObject
{
    [Header("Rooms")]
    // First rooms
    public List<GameObject> firstRoomPrefabs;
    // Last rooms
    public GameObject lastRoomPrefabT;
    public GameObject lastRoomPrefabR;
    public GameObject lastRoomPrefabB;
    public GameObject lastRoomPrefabL;
    // Rooms
    public List<GameObject> roomPrefabsT;
    public List<GameObject> roomPrefabsR;
    public List<GameObject> roomPrefabsB;
    public List<GameObject> roomPrefabsL;
    [Header("Hallways")]
    // Hallways
    public List<GameObject> hallwayPrefabsT;
    public List<GameObject> hallwayPrefabsR;
    public List<GameObject> hallwayPrefabsB;
    public List<GameObject> hallwayPrefabsL;
}
