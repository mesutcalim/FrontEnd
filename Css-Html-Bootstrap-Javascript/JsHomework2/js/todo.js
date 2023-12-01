const TASKDOM = document.querySelector("#task");
const LISTDOM = document.querySelector("#list");
const TODOLIST = localStorage.getItem("todolist");
const BTNADD = document.querySelector("#liveToastBtn");
const TOAST = document.querySelectorAll("#liveToast");

if (TODOLIST) LISTDOM.innerHTML = JSON.parse(TODOLIST);

function newElement(){
    const LI = document.createElement("li");
    var TASKS = TASKDOM.value.trim();

    if(TASKS){
        LI.textContent = TASKS;
        if(LI){
            const DLTSPN = document.createElement("span");
            DLTSPN.innerHTML = "&times;";
            DLTSPN.classList.add("close");
            DLTSPN.addEventListener("click", () => removeElement(LI));
            LI.appendChild(DLTSPN);
            LISTDOM.appendChild(LI);
            $(TOAST[0]).toast("show");
            TASKDOM.value = "";
            saveToLocalStorage(LISTDOM);
        }
    }else{
        $(TOAST[1]).toast("show");
        return;
    }

    LI.addEventListener("click", () =>{
        if(LI.classList.contains("checked")){
            LI.classList.remove("checked");
        }else{
            LI.classList.add("checked");
            saveToLocalStorage(LISTDOM);
        }
    });
}

document.querySelectorAll("#list > li").forEach((item) => {
    item.addEventListener("click" , () => {
        if(item.classList.contains("checked")) item.classList.remove("checked");
        else item.classList.add("checked");
        saveToLocalStorage(LISTDOM);
    })
})

document.querySelectorAll("#list span").forEach((item)=>{
    let li = item.parentNode;
    item.addEventListener("click", ()=>{
        removeElement(li);
    })
})

const removeElement = (element) => {
    element.remove();
    saveToLocalStorage(LISTDOM);
};

document.addEventListener("keypress", (event)=>{
    if(event.key === "Enter") newElement();
});

function saveToLocalStorage(item) {
    localStorage.setItem("todolist", JSON.stringify(item.innerHTML));
}