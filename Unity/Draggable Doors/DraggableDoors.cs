using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class DraggableDoors : MonoBehaviour
{
	public GameObject playerCam;

	public KeyCode grabDoorKeybind = KeyCode.Mouse0;

	public string doorTag = "Door";
	
	private float PickupRange = 2f;
	private float distance = 2f;
	private float maxDistanceGrab = 3f;

	private float gravity = 9.81f;

	private Ray playerAim;
	public GameObject objectHeld;
	private bool isObjectHeld;
	private bool tryPickupObject;

	void Start()
	{
		isObjectHeld = false;
		tryPickupObject = false;
		objectHeld = null;
	}

	void FixedUpdate()
	{
		if (Input.GetKey(grabDoorKeybind))
		{
			if (!isObjectHeld)
			{
				TryPickObject();
				tryPickupObject = true;
			}
			else
			{
				HoldObject();
			}
		}
		else if (isObjectHeld)
		{
			DropObject();
		}
		
	}

	private void TryPickObject()
	{
		Ray playerAim = playerCam.GetComponent<Camera>().ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
		RaycastHit hit;

		if (Physics.Raycast(playerAim, out hit, PickupRange))
		
		{
			objectHeld = hit.collider.gameObject;
			
			if (hit.collider.tag == doorTag && tryPickupObject)
			{
				isObjectHeld = true;
				objectHeld.GetComponent<Rigidbody>().useGravity = true;
				objectHeld.GetComponent<Rigidbody>().freezeRotation = false;
			}
		}
	}

	private void HoldObject()
	{
		Ray playerAim = playerCam.GetComponent<Camera>().ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));

		Vector3 nextPos = playerCam.transform.position + playerAim.direction * distance;
		Vector3 currPos = objectHeld.transform.position;

		objectHeld.GetComponent<Rigidbody>().velocity = (nextPos - currPos) * gravity;

		if (Vector3.Distance(objectHeld.transform.position, playerCam.transform.position) > maxDistanceGrab)
		{
			DropObject();
		}
	}

	private void DropObject()
	{
		isObjectHeld = false;
		tryPickupObject = false;
		objectHeld.GetComponent<Rigidbody>().useGravity = true;
		objectHeld.GetComponent<Rigidbody>().freezeRotation = false;
		objectHeld = null;
	}
	
}
