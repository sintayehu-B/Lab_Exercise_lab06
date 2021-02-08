const taskInput = document.querySelector('#task');

const form = document.querySelector('#task-form');

const filter = document.querySelector('#filter');

const taskList = document.querySelector('.collection');

const clearBtn = document.querySelector('.clear-tasks');

const sortBtn = document.querySelector('#sort');
//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');   
// events
form.addEventListener('submit', addNewTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

/// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

// // //   Filter Task 
filter.addEventListener('keyup', filterTasks);

  // Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

// Sorting from the list 
sortBtn.addEventListener('click',sortTask )
// Event Handler
function addNewTask(e){
    e.preventDefault(); //disable form submission

    if (taskInput.value === '') 
    {
        taskInput.style.borderColor = 'red';
       return;     //avoiding else statement

    }else{
        // Create an li element when the user adds a task 
        const li = document.createElement('li');
        // Adding a class
        li.className = 'collection-item';
        // Create text node and append it 
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new element for the link 
        const link = document.createElement('a');
        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to li
        li.appendChild(link);
        // adding the date 

        // Append to ul 
        taskList.appendChild(li);
        taskInput.value = ""
    }
        

        

    
};

function clearAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
        
    }
}

function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){

        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }
}
// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}
// search filter
function filterTasks(e){
    const keyup = e.target.value;
    populateTaskList(keyup );
}
function populateTaskList(keyup) {
    let lists  = taskList.querySelectorAll(".collection-item");
    lists.forEach(element => {
        if(element.textContent.includes(keyup)){
            console.log(element.textContent);
            element.style.display = "block";
        }
        else{
            element.style.display = "None";
        }
    });
}

// Sorting Task

function sortTask(e){
    var doSort = "Ascending";
    if( sortBtn.firstElementChild.classList.contains('fa-arrow-circle-up')){
        sortBtn.firstElementChild.classList.remove('fa-arrow-circle-up');
        sortBtn.firstElementChild.classList.add('fa-arrow-circle-down');
        doSort = "Ascending"
    }
    else{
        e.target.firstElementChild.classList.remove('fa-arrow-circle-down');
        e.target.firstElementChild.classList.add('fa-arrow-circle-up');
        doSort = "Descending";
    }
    // var sort_by_date = function(a, b) {
    //     return Date.parse(a.querySelector(".hiddenEle").innerHTML) > Date.parse(b.querySelector(".hiddenEle")).innerHTML;
    // }
    var lists  = taskList.querySelectorAll(".collection-item");
    console.log(lists);
    const li = Array.from(lists);
    li.reverse();
    if(doSort==="Ascending"){
        li.sort(li);
    }
    else{
        li.sort(li);
        li.reverse()
    }
    console.log(li);
    lists = li;
}



