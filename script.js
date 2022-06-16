// console.log(document.getElementById("search"))
// let w = window.innerWidth;
// let h = window.innerHeight;

// console.log(w,h);

let searchBox = document.getElementById("search")
// console.log(searchBox);

let inputs = document.querySelectorAll('input');

// for(let i=0; i<inputs.length; i++){
//     inputs[i].value = "hello world"
// }

// let newDiv = document.createElement('div');
// newDiv.className = "hello";
// newDiv.style.backgroundColor = 'red';
// // newDiv.textContent = "hello world";

// aside2 = document.querySelector(".aside2");

// let newDivText = document.createTextNode("Hello world");
// newDiv.appendChild(newDivText);

// let taskList = document.getElementsByClassName("tasks")[0];
let taskList = document.querySelector(".tasks");

// console.log(taskList)


// console.log(newDiv);

// aside2.insertBefore(newDiv, taskList);
// aside2.appendChild(newDiv);

// taskList.remove();

let crossList = document.querySelectorAll(".cross-image");
for(let i=0; i<crossList.length; i++){
    crossList[i].addEventListener("click", crossClick);
}

function crossClick(e){
    console.log("Cross clicked");
    // console.log(e.mousedown);
    // e.target.parentElement.style.display = "none";
    console.log(e.target.parentElement.nextElementSibling);
    taskList.removeChild(e.target.parentElement.nextElementSibling);
    taskList.removeChild(e.target.parentElement);
    
}

let plus = document.querySelector(".plus").addEventListener("click", addTask);

function addTask(e){
    let text = document.querySelector("#add").value;

    let newTask = document.createElement("li");
    newTask.className = "task"

    let newTaskCheck = document.createElement("input")
    newTaskCheck.setAttribute("type", "checkbox");
    newTaskCheck.className = "check";
    
    let newTaskText = document.createElement("div");
    newTaskText.textContent = text;

    let newTaskCross = document.createElement("img");
    newTaskCross.setAttribute("src", "images/cross.png");
    newTaskCross.className = "cross-image";
    newTaskCross.addEventListener("click", crossClick);

    newTask.appendChild(newTaskCheck);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskCross);
    taskList.appendChild(newTask);

    let divider = document.createElement("hr");
    divider.className = "task-divider";

    taskList.appendChild(divider);

    document.querySelector("#add").value = "";
}

function checked(){
    let checkBox = document.getElementsByClassName("check")
}

// let down = false;

// document.addEventListener(
//     'mousedown', () => down = true);

// document.addEventListener(
//     'mouseup', () => down = false);

// let body = document.body.addEventListener("mousemove", draw);

// function draw(e){
//     // e.clientX;
//     // e.clientY;
//     // console.log("mousedown");
//     // console.log("done")
//     if(down == true){
//         let drawing = document.createElement('div');
//         drawing.style.position = "absolute";
//         drawing.style.backgroundColor = 'orange';
//         drawing.style.width = "10px";
//         drawing.style.height = "10px";
//         drawing.style.left = e.clientX + 'px';
//         drawing.style.top = e.clientY + 'px';
//         document.body.appendChild(drawing)
//     }
// }

