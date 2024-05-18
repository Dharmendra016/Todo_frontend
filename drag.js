const draggable = document.querySelectorAll(".todo")

const droppable = document.querySelectorAll(".todos")


draggable.forEach((task)=>{
    task.addEventListener("dragstart" ,() => {
        task.classList.add("is-dragging")
    })
    task.addEventListener("dragend" ,() => {
        task.classList.remove("is-dragging")
    })
})

droppable.forEach((zone) => {
    zone.addEventListener("dragover" , (e) => {
        e.preventDefault();

        const bottomTask = insertAboveTask(zone , e.clientY)
        const currTask = document.querySelector(".is-dragging");

        if( !bottomTask){
            zone.appendChild(currTask);
        }else{
            zone.insertBefore(currTask,bottomTask);
        }

    })


})

function insertAboveTask(zone , mouseY){

    const other_tasks = zone.querySelectorAll(".todo:not(.is-dragging");
    let closestTaks = null ; 
    
    let closestOffset = Number.NEGATIVE_INFINITY ; 

    other_tasks.forEach((task) => {
        const {top} = task.getBoundingClientRect();
        console.log("top",top);
        console.log("mousey" , mouseY);
        const offset = mouseY - top ; 
        console.log("offset" , offset);

        if( offset < 0 && offset > closestOffset ){
            closestTaks = task ;
            closestOffset = offset ; 
        }
    })
    return closestTaks;
}