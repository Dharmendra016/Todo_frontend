const todo_input = document.querySelector("#todo_form input");
const  todo_form = document.querySelector("#todo_form");
const todos = document.querySelector(".todos");


todo_form.addEventListener("submit" , (e) => {
    e.preventDefault(); 
    const text = todo_input.value ;
    console.log("I am inside script js");
    const element = document.createElement("p");
    element.innerHTML = text;
    element.classList.add("todo")
    element.setAttribute("draggable" , "true");
    todos.appendChild(element);

    element.addEventListener("dragstart" ,() => {
        element.classList.add("is-dragging")
    })
    element.addEventListener("dragend" ,() => {
        element.classList.remove("is-dragging")
    })
    

})