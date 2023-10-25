
let isSolving = false

let timeInterval
let data = []
let elements = []
const minValue = 5
const maxValue = 95
let numberOfData
let isSorted = false



//#region DEFINE , EVENTS
const visualizer = document.getElementById('visualizer')
//#region SET UP
// RESET BUTTON
const resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click', function(){
    Reset()
})
// CREATE BUTTON
const createButton = document.getElementById("create-button")
createButton.addEventListener("click", function(){
    Create()
});
// NUMBER OF DATA
const numberOfDataUI = document.getElementById('number-of-data')
const numberOfDataSlider = document.getElementById('number-of-data-input')
numberOfDataSlider.min = '5'
numberOfDataSlider.max = '100'
numberOfDataSlider.value = '20'
numberOfDataSlider.addEventListener('input', function(){
    UpdateSliderAndValue(numberOfDataSlider, 'number')
    Create()
})
UpdateSliderAndValue(numberOfDataSlider, 'number')
// TIME INTERVAL
const timeIntervalUI = document.getElementById('time-interval')
const timeIntervalSlider = document.getElementById('time-interval-input')
timeIntervalSlider.min = '0'
timeIntervalSlider.max = '4'
timeIntervalSlider.value = '3'
timeIntervalSlider.addEventListener('input', function(){
    UpdateSliderAndValue(timeIntervalSlider, 'time')
})
UpdateSliderAndValue(timeIntervalSlider, 'time')

function UpdateSliderAndValue(slider, param){
    if(param === 'number'){
        numberOfDataUI.innerHTML = slider.value
        numberOfData = slider.value
    }
    else if(param === 'time'){
        TimeIntervalConverter(timeIntervalSlider.value)
        timeIntervalUI.innerHTML = timeInterval
    }
}
function TimeIntervalConverter(value){
    switch (value) {
        case '0':
            timeInterval = 1;
            break
        case '1':
            timeInterval = 5;
            break
        case '2':
            timeInterval = 10;
            break
        case '3':
            timeInterval = 100;
            break
        case '4':
            timeInterval = 500;
            break
        default:
            console.log("TimeIntervalConverter: undefined value")
      }
}
//#endregion
//#region ALGORITHM
const bubbleSortButton = document.getElementById("bubble-sort-button")
bubbleSortButton.addEventListener("click", function(){
    DisableButtonsOnSolving(bubbleSortButton)
    BubbleSort(data)
});
const selectionSortButton = document.getElementById("selection-sort-button")
selectionSortButton.addEventListener("click", function(){
    DisableButtonsOnSolving(selectionSortButton)
    SelectionSort(data)
});
const insertionSortButton = document.getElementById("insertion-sort-button")
insertionSortButton.addEventListener("click", function(){
    DisableButtonsOnSolving(insertionSortButton)
    InsertionSort(data)
});
/*const mergeSortButton = document.getElementById("merge-sort-button")
mergeSortButton.addEventListener("click", function(){
    //DisableButtonsOnSolving(mergeSortButton)
    //MergeSort(data, 0, data.length-1)
});*/
//#endregion
const algorithmButtons = [bubbleSortButton, selectionSortButton, insertionSortButton]//, mergeSortButton]

Create()
//DisableButtonsBeforeData()

function DisableButtonsBeforeData(){
    algorithmButtons.forEach(button => {
        if(button.classList.contains('active-algorithm-button')){
            button.classList.remove('active-algorithm-button')
        }
        button.disabled = true
    });
    numberOfDataSlider.disabled = false
    createButton.disabled = false
}
function DisableButtonsOnSolving(activeAlgorithmButton){
    algorithmButtons.forEach(button => {
        if(button === activeAlgorithmButton){
            activeAlgorithmButton.classList.add('active-algorithm-button')
        }
        button.disabled = true
    });
    numberOfDataSlider.disabled = true
    createButton.disabled = true
}
function EnableButtons(){
    algorithmButtons.forEach(button => {
        if(button.classList.contains('active-algorithm-button')){
            button.classList.remove('active-algorithm-button')
        }
        button.disabled = false
    });
    //createButton.disabled = false
}

//#endregion


function Create(){
    if(visualizer.firstChild){
        Reset()
    }
    //await new Promise(resolve => setTimeout(resolve, 500));
    EnableButtons()
    data = []
    data = GenerateData(numberOfData, minValue, maxValue)
    data = MixData(data)
    isSorted = false
    ShowElements(data)
    console.log('Create: done')
}
async function Reset(){
    data = []
    ClearVisualizer()
    DisableButtonsBeforeData()
    console.log("Reset: done")
    await new Promise(resolve => setTimeout(resolve, 100)); /////
}
function ClearVisualizer(){
    while (visualizer.firstChild) {
        visualizer.removeChild(visualizer.lastChild);
    }
    console.log("ClearVisualizer: done")
}
function GenerateData(numberOfData, minValue, maxValue){
    const ratio = (maxValue - minValue) / numberOfData
    for (let i = 0; i < numberOfData; i++) {
        //let number = Math.round(ratio * i + minValue)
        let number = ratio * i + minValue
        data.push(number)
    }
    console.log("GenerateData: done")
    return data
}
function MixData(data){
    /*
    for (let i = 0; i < numberOfData; i++) {
        let number = data[i];
        let index = RandomIntFromInterval(0, numberOfData-1)
        data.splice(i, 1)
        data.splice(index, 0, number)
    }*/
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
    console.log("MixData: done")
    return data
}
function RandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function ShowElements(data){
    for (let i = 0; i < data.length; i++) {
        const number = data[i];
        CreateElement(i, number, numberOfData)
    }
    console.log("ShowElements: done")
}
function CreateElement(index, height, numberOfData){
    let element = document.createElement('div')
    element.classList.add('element')
    element.setAttribute('id', `element${height}`)
    element.style.height = `${height}%`
    let width = 100 / numberOfData
    element.style.width = `${width}%`
    element.style.position = 'absolute'
    element.style.bottom = 0
    element.style.left = `${index * width}%`

    visualizer.appendChild(element)
    elements.push(element)
}
////////////////////////////////////////////////
//#region ALGORITHMS

async function BubbleSort(data) {

    //#region ONLY ALGORITHM
    /*
    // If is only one element in array is sorted
    if(data.length <= 1){
        isSorted = true
    }
    // Loop until is sorted
    while(isSorted != true){
        let didChanges = false
        // Loop through data
        for (let i = 0; i < data.length-1; i++) {
            // Set current and next number
            const currentNumber = data[i];
            const nextNumber = data[i+1]
            // If current number is larger, switch numbers
            if(nextNumber < currentNumber){
                data.splice(i, 2, nextNumber, currentNumber)
                didChanges = true
            }
        }
        // If we didn't do changes to data, then it is sorted
        if(didChanges == false){
            isSorted = true
        }
    }
    */
    //#endregion

    // Loop until is sorted
    while(isSorted != true){
        let didChanges = false
        // Loop through data
        for (let i = 0; i < data.length-1; i++) {
            // Set current and next number / element
            const currentNumber = data[i];
            const nextNumber = data[i+1]
            const currentElement = document.getElementById(`element${currentNumber}`)
            const nextElement = document.getElementById(`element${nextNumber}`)
            // If current number is larger, switch numbers
            if(nextNumber < currentNumber){
                didChanges = true
                data.splice(i, 2, nextNumber, currentNumber)
                //#region Graphics
                await new Promise(resolve => setTimeout(resolve, timeInterval));
                currentElement.classList.add('bubble-sort-current-element')
                nextElement.classList.add('bubble-sort-switching-element')
                await new Promise(resolve => setTimeout(resolve, timeInterval));
                const currentLeft = currentElement.style.left
                const nextLeft = nextElement.style.left
                currentElement.style.left = nextLeft
                nextElement.style.left = currentLeft

                await new Promise(resolve => setTimeout(resolve, timeInterval));
                
                currentElement.classList.remove('bubble-sort-current-element')
                nextElement.classList.remove('bubble-sort-switching-element')
                //#endregion
            }
            else{
                //#region Graphics
                currentElement.classList.add('bubble-sort-current-element')
                nextElement.classList.add('bubble-sort-comparing-element')
                await new Promise(resolve => setTimeout(resolve, timeInterval));
                currentElement.classList.remove('bubble-sort-current-element')
                nextElement.classList.remove('bubble-sort-comparing-element')
                //#endregion
            }
        }
        // If we didn't do changes to data, then it is sorted
        if(didChanges == false){
            isSorted = true
        }
    }
    // COMPLETE ANIMATION
    CompleteAnimation()
    isSolving = false
    console.log('BubbleSort: complete')
}
async function SelectionSort(data){

    //#region ONLY ALGORITHM
    /*
    // If is only one element in array is sorted
    if(data.length <= 1){
        isSorted = true
    }
    // Loop through data
    for (let i = 0; i < data.length; i++) {
        // Set current number and set it to minimum
        const number = data[i];
        let minNumber = number
        let minNumberIndex = i
        // Loop through other data
        for (let j = i+1; j < data.length; j++) {
            const num = data[j];
            // If other number is smaller than current minimum, change minimum
            if(num < minNumber){
                minNumber = num
                minNumberIndex = j
            }
        }
        // After looping through all other data, place minimum number at current number and shift other data to right
        data.splice(minNumberIndex, 1)
        data.splice(i, 0, minNumber)
    }
    isSorted = true
    */
    //#endregion

    // Loop through data
    for (let i = 0; i < data.length; i++) {
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        // Set current number / element and set it to minimum
        const number = data[i];
        let currentElement = document.getElementById(`element${number}`)
        currentElement.classList.add('selection-sort-current-element')
        let minNumber = number
        let minElement = document.getElementById(`element${number}`)
        let minNumberIndex = i
        minElement.classList.add('selection-sort-min-element')
        // Loop through other data
        for (let j = i+1; j < data.length; j++) {
            const num = data[j];
            let nElement = document.getElementById(`element${num}`)
            nElement.classList.add('selection-sort-checking-element')
            await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
            // If other number is smaller than current minimum, change minimum
            if(num < minNumber){
                minNumber = num
                minNumberIndex = j
                //#region Graphics
                minElement.classList.remove('selection-sort-min-element')
                minElement = document.getElementById(`element${minNumber}`)
                minElement.classList.add('selection-sort-min-element')
                //#endregion
            }
            nElement.classList.remove('selection-sort-checking-element')
        }
        // After looping through all other data, set minimum number at current number and shift other data to right
        data.splice(minNumberIndex, 1)
        data.splice(i, 0, minNumber)
        //#region Graphics
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        for (let e = 0; e < data.length; e++) {
            const number = data[e];
            let element = document.getElementById(`element${number}`)
            let width = (element.style.width).replace('%','')
            element.style.left = `${e * width}%`
        }
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        minElement.classList.remove('selection-sort-min-element')
        currentElement.classList.remove('selection-sort-current-element')
        //#endregion
    }
    isSorted = true
    CompleteAnimation()
    isSolving = false
    console.log('SelectionSort: complete')
}
async function InsertionSort(data){

    //#region ONLY ALGORITHM
    /*
    // If is only one element in array is sorted
    if(data.length <= 1){
        isSorted = true
    }
    // Loop through data
    for (let i = 0; i < data.length; i++) {
        // Set current number
        const number = data[i];
        // Loop backward from current number
        for (let j = i-1; j >= 0; j--) {
            // Set previous number
            const num = data[j];
            // If previous number is larger than current, switch numbers
            if(number < num){
                data.splice(j, 2, number, num)
            }
            // If previous number is smaller break loop
            if(number > num){
                break
            }
        }
    }
    isSorted = true
    */
    //#endregion

    // Loop through data
    for (let i = 0; i < data.length; i++) {
        // Set current number / element
        const number = data[i];
        const element = document.getElementById(`element${number}`)
        element.classList.add('insertion-sort-current-element')
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        // Loop backward from current number
        for (let j = i-1; j >= 0; j--) {
            // Set previous number / element
            const num = data[j];
            const nElement = document.getElementById(`element${num}`)
            await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
            // If previous number is larger than current, switch numbers
            if(number < num){
                nElement.classList.add('insertion-sort-bigger-element')
                await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
                data.splice(j, 2, number, num)
                //#region Graphics
                const left = element.style.left
                const nLeft = nElement.style.left
                element.style.left = nLeft
                nElement.style.left = left
                await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
                //#endregion
            }
            nElement.classList.remove('insertion-sort-bigger-element')
            // If previous number is smaller break loop
            if(number > num){
                nElement.classList.add('insertion-sort-smaller-element')
                await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
                nElement.classList.remove('insertion-sort-smaller-element')
                break
            }
        }
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        element.classList.remove('insertion-sort-current-element')
    }
    CompleteAnimation()
    isSolving = false
    console.log('InsertionSort: complete')
}
async function MergeSort(data, left, right){

    //#region ONLY ALGORITHM
    /*
    MergeSort(data, left, right){
    if(left >= right){
		return
	}
    var middle = left + parseInt((right-left)/2)
    MergeSort(data, left, middle)
    await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
    MergeSort(data, middle+1, right)
    await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
    Merge(data, left, middle, right)
    }

    function Merge(array, left, middle, right){
    var length1 = middle - left + 1
    var length2 = right - middle

    var tempLeftArray = new Array(length1)
    var tempRightArray = new Array(length2)

    for (var i = 0; i < length1; i++)
		tempLeftArray[i] = array[left + i];
	for (var j = 0; j < length2; j++)
		tempRightArray[j] = array[middle + 1 + j];

    var i = 0
    var j = 0
    var k = left

    while (i < length1 && j < length2) {
		if (tempLeftArray[i] <= tempRightArray[j]) {
			array[k] = tempLeftArray[i];
			i++;
		}
		else {
			array[k] = tempRightArray[j];
			j++;
		}
		k++;
	}

    while (i < length1) {
		array[k] = tempLeftArray[i];
		i++;
		k++;
	}
	while (j < length2) {
		array[k] = tempRightArray[j];
		j++;
		k++;
	}
    }
    */
    //#endregion

    console.log(data)

    if(left >= right){
		return
	}

    var middle = left + parseInt((right-left)/2)
    await new Promise(resolve => setTimeout(resolve, timeInterval*5)); /////
    MergeSort(data, left, middle)
    await new Promise(resolve => setTimeout(resolve, timeInterval*5)); /////
    MergeSort(data, middle+1, right)
    await new Promise(resolve => setTimeout(resolve, timeInterval*5)); /////
    Merge(data, left, middle, right)
}

function Sort(array, left, right){
    console.log(array)

    if(left >= right){
		return;
	}

    var middle = left + parseInt((right-left)/2)
    
    Sort(array, left, middle)
    Sort(array, middle+1, right)
    Merge(array, left, middle, right)
}

async function Merge(array, left, middle, right){
    var length1 = middle - left + 1
    var length2 = right - middle

    var tempLeftArray = new Array(length1)
    var tempRightArray = new Array(length2)

    for (var i = 0; i < length1; i++)
		tempLeftArray[i] = array[left + i];
	for (var j = 0; j < length2; j++)
		tempRightArray[j] = array[middle + 1 + j];

    var i = 0
    var j = 0
    var k = left

    while (i < length1 && j < length2) {
        var leftElement = document.getElementById(`element${tempLeftArray[i]}`)
        var rightElement = document.getElementById(`element${tempRightArray[j]}`)
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
		if (tempLeftArray[i] <= tempRightArray[j]) {
            leftElement.classList.add('merge-sort-smaller-element')
            rightElement.classList.add('merge-sort-bigger-element')
			array[k] = tempLeftArray[i];
            await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
            leftElement.style.left = parseInt(leftElement.style.width.replace('%','')) * k
			i++;
		}
		else {
            leftElement.classList.add('merge-sort-bigger-element')
            rightElement.classList.add('merge-sort-smaller-element')
			array[k] = tempRightArray[j];
            await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
            rightElement.style.left = parseInt(rightElement.style.width.replace('%','')) * k
			j++;
		}
        
    
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        leftElement.classList.remove('merge-sort-smaller-element')
        rightElement.classList.remove('merge-sort-smaller-element')
        leftElement.classList.remove('merge-sort-bigger-element')
        rightElement.classList.remove('merge-sort-bigger-element')
		k++;
	}

    while (i < length1) {
		array[k] = tempLeftArray[i];
        leftElement.classList.add('merge-sort-bigger-element')
        leftElement.style.left = parseInt(leftElement.style.width.replace('%','')) * k
		i++;
		k++;
	}
	while (j < length2) {
		array[k] = tempRightArray[j];
        rightElement.classList.add('merge-sort-bigger-element')
        rightElement.style.left = parseInt(rightElement.style.width.replace('%','')) * k
		j++;
		k++;
	}

    
    console.log(array)
}


//#endregion

async function CompleteAnimation(){
    for (let i = 0; i < data.length; i++) {
        const number = data[i];
        const element = document.getElementById(`element${number}`)
        element.classList.add('element-complete')
        await new Promise(resolve => setTimeout(resolve, timeInterval)); /////
        //element.classList.remove('element-complete')
    }
}


