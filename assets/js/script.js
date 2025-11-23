let inputBox = document.getElementById("input-box");
let listApp = document.getElementById("list-app");
let addbtn = document.getElementById("btn"); 


addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBox.value === '') {
        alert("You must write something!..");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listApp.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = " ";
        saveData();
    }
});

listApp.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

let saveData = () => {
    localStorage.setItem("data", listApp.innerHTML);
};

let displayTask = () => {
    listApp.innerHTML = localStorage.getItem("data");
};

displayTask();
