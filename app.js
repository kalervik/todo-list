var todoArr = [];
var message = "";
var taskCounter = 0;


//check if localstorage item exist
if(localStorage.getItem("todoTasks") != null){
    //add task function

    var todoArr = JSON.parse(localStorage.getItem('todoTasks'));
    var message = "";
//    taskCounter = i-1;
    loadTask(todoArr);
//    for(var i = 0; i< todoArr.length; i++){
//        console.log(todoArr[i]);
//    }
    
    document.getElementById('removeStorage').style.display ='block';
}

function addTask(){
    var todoItem = document.getElementById('todoData').value;
    var showlistTable = document.getElementById('showListTable');
        finalTodoItem = todoItem.trim();
        if(finalTodoItem != ''){
            if(todoArr.indexOf(finalTodoItem) == -1){
                todoArr.push(finalTodoItem);
                    var rowCount = document.getElementById('showListTable').rows.length;
                    var row = showlistTable.insertRow(rowCount);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    cell1.innerHTML = todoArr.indexOf(finalTodoItem) + 1;
                    cell2.innerHTML = todoArr[taskCounter];
                    cell3.innerHTML = "<select><option>Actions</option> <option value = 'done'>Mark as done</option><option value='delete'>Delete</option></select>";
                taskCounter++;
                message ="Task saved with an id# " + (todoArr.indexOf(finalTodoItem) + 1);
                // add the task array to localstorage
                showMessage(message);
                localStorage.setItem("todoTasks", JSON.stringify(todoArr));
                document.getElementById('removeStorage').style.display ='block';
            }
            else{
                message = "Task already exist with an id# " + (todoArr.indexOf(finalTodoItem) + 1);
                showMessage(message);
            }
        }
        else{
            message ="Cannot add an empty task.";
            showMessage(message);
        }
}
// function load tasks from localstorage

function loadTask(taskArray){
    var showlistTable = document.getElementById('showListTable');
    for(var i = 0; i < taskArray.length; i++){
        
    var rowCount = document.getElementById('showListTable').rows.length;
        var row = showlistTable.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
        cell1.innerHTML = i + 1;
        cell2.innerHTML = taskArray[i];
        cell3.innerHTML = "<select id='selectActions''><option>Actions</option> <option value = 'done'>Mark as done</option><option value='delete'>Delete</option></select>";
        taskCounter++;
    }
    message = "Tasks loaded from local storage";
    showMessage(message);
}

//remove data from localstorage
function deleteData(){
    localStorage.removeItem("todoTasks");
    message ="Task removed from local storage."  ;
    showMessage(message);
    setTimeout(function(){ location.reload(); }, 1000);
}
    if(document.getElementById('selectActions')){
        document.getElementById('selectActions').onchange = function(){
            if(this.selectedIndex == 1){
                alert('Task Done');
            }
            else if(this.selectedIndex == 2){
                var val = this.value;
                alert(val);
            }
        }
    }
    


//hide message 
function deleteMessage(){
    document.getElementById('messages').style.display = 'none';
}

//show messages based on different transactions
function showMessage(message){
    var testvalue = document.getElementById('messageShow') ;
    if(message == "Cannot add an empty task." || (message.indexOf("Task already exist with") > -1)){
        document.getElementById('messages').style.backgroundColor = 'red';
    }
    else{
        document.getElementById('messages').style.backgroundColor = 'darkseagreen';
        document.getElementById('messages').style.display = 'block';
    }
    testvalue.innerHTML = message;
    
}