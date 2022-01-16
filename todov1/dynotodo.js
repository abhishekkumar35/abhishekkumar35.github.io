let todosItemContainer = document.getElementById("todoItemsContainer");


let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function createAndAppendTodo(todoList) {
    let todoElement = document.createElement("li");
    console.log(todoElement);
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todosItemContainer.appendChild(todoElement);

    let InputElement = document.createElement("input");
    InputElement.type = "checkbox";
    InputElement.id = "myCheckBox";
    InputElement.classList.add("checkbox-input");
    todoElement.appendChild(InputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.htmlFor = "myCheckBox";
    labelElement.textContent = todoList.text;
    labelElement.classList.add("checkbox-label");
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);


}
for (let each of todoList) {
    createAndAppendTodo(each);
}







console.log(todosItemContainer);