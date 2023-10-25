//#region DATE
const dateDisplay = document.getElementById('date')
const date = new Date()
const day = date.getDate()
const monthNumber = date.getMonth()+1
let month
switch (monthNumber) {
    case 1:
        month = 'January'
        break;
    case 2:
        month = 'February'
        break;
    case 3:
        month = 'March'
        break;
    case 4:
        month = 'April'
        break;
    case 5:
        month = 'May'
        break;
    case 6:
        month = 'June'
        break;
    case 7:
        month = 'July'
        break;
    case 8:
        month = 'August'
        break;
    case 9:
        month = 'September'
        break;
    case 10:
        month = 'October'
        break;
    case 11:
        month = 'November'
        break;
    case 12:
        month = 'December'
        break;
    default:
        console.log('Not valid month number')
        break;
}
const year = date.getFullYear()
const dateFormat = `${day}. ${month} ${year}`
dateDisplay.innerHTML = dateFormat
//#endregion

//#region INPUT PLACE
const taskInput = document.getElementById('task-input')
const addButton = document.getElementById('add-button')

addButton.addEventListener('click', function(){
    let inputValue = taskInput.value
    taskInput.value = ''
    if(inputValue != null && inputValue != ''){
        AddTask(inputValue)
    }
})
document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
        case 13 :
            let inputValue = taskInput.value
            taskInput.value = ''
            if(inputValue != null && inputValue != ''){
                AddTask(inputValue)
            }
            break;
    }
}
//#endregion

const tasks = document.getElementById('tasks')

function AddTask(name){

    //#region CREATING ELEMENTS, EVENTS
    let task = document.createElement('div')
    task.classList.add('task')
    let taskInfo = document.createElement('div')
    taskInfo.classList.add('task-info')
    let taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.classList.add('task-checkbox')
    let taskNameButton = document.createElement('button')
    taskNameButton.classList.add('task-name-button')
    taskNameButton.innerHTML = name
    taskNameButton.addEventListener('click', function(){
        CrossUncrossTask(taskNameButton, taskCheckbox, 'b')
    })
    taskCheckbox.addEventListener('change', function(){
        CrossUncrossTask(taskNameButton, taskCheckbox, 'c')
    })
    let taskDeleteButton = document.createElement('button')
    taskDeleteButton.classList.add('task-delete-button')
    taskDeleteButton.innerHTML = 'X'
    taskDeleteButton.addEventListener('click', function(){
        task.remove()
    })
    //#endregion

    //#region CREATE STRUCTURE
    taskInfo.appendChild(taskCheckbox)
    taskInfo.appendChild(taskNameButton)
    task.appendChild(taskInfo)
    task.appendChild(taskDeleteButton)
    tasks.appendChild(task)
    //#endregion

}

function CrossUncrossTask(button, checkbox, sign){
    if(sign === 'b'){
        let isCrossed = button.classList.contains('task-crossed')
        if(isCrossed != true){
            button.classList.add('task-crossed')
            checkbox.checked = true
        }
        else{
            button.classList.remove('task-crossed')
            checkbox.checked = false
        }
    }
    else if(sign === 'c'){
        let isChecked = checkbox.checked
        if(isChecked != true){
            button.classList.remove('task-crossed')
        }
        else{
            button.classList.add('task-crossed')
        }
    }
}
