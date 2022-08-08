//Selectors

let form = document.querySelector('form')
let input = document.querySelector('input')
let button = document.querySelector("submit_btn")
let tasks = document.querySelector("#tasks")

// console.log(form, input, button, task)



form.addEventListener("submit", (event) => {
  //prevents form from submitting
  event.preventDefault()

  let task = input.value;
  if (task.length > 1) {
    //creating todo div
    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")   //assigning name to div

    let new_input = document.createElement("input")
    new_input.classList.add("text");
    new_input.type = "text";
    new_input.value = task;
    new_input.setAttribute("readonly", "readonly");
    //Addding input to div
    todoDiv.append(new_input)

    //edit button
    let completeBtn = document.createElement("button")
    completeBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    completeBtn.classList.add("completeBtn")

    todoDiv.append(completeBtn)

    //delete button
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.classList.add("deleteBtn")

    todoDiv.append(deleteBtn)
    //appending
    tasks.appendChild(todoDiv)

  }

})