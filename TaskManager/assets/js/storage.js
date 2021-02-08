// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 

let DB;

document.addEventListener('DOMContentLoaded',()=>{
    let TasksDB = indexedDB.open("tasks",1);
    TasksDB.onsuccess = function(){
        console.log("databaseREady");
        Db = TasksDB.result;
        //Dispplay tasklist

        print(Db);
    }
    TasksDB.onerror = function(e){
        console.log("some error happend " + e);

    }
})