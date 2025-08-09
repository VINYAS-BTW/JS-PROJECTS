const lc = document.querySelector(".u-list");
const inputbox = document.querySelector(".addbar");
const addButton = document.querySelector(".addtask")

function addtask() {
    if (inputbox.value.trim() === '') {
        alert("PLS ENTER THE TASK");
    } else {
        let li = document.createElement("li");

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task-content");

        let cb = document.createElement("input");
        cb.type = "checkbox";

        let span = document.createElement("span");
        span.textContent = inputbox.value;

        taskDiv.appendChild(cb);
        taskDiv.appendChild(span);

        let db = document.createElement("button");
        db.innerText = 'delete';

        li.appendChild(taskDiv);
        li.appendChild(db);

        db.style.marginLeft="4rem"
        db.style.fontSize='0.7rem'

        lc.appendChild(li);
        inputbox.value = '';
        saveData();
    }
}

addButton.addEventListener("click", addtask);


lc.addEventListener("click", function (e) {
    
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        const li = e.target.closest("li");
        if (e.target.checked) {
            li.classList.add("checked");
            
        } else {
            li.classList.remove("checked");
           
        }
    }
    
    else if (e.target.tagName === "BUTTON" && e.target.innerText === 'delete') {
        const li = e.target.closest("li");
        lc.removeChild(li);
        
        
    }
})
