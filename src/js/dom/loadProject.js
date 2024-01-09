import Todo from "../todo";
import createHeading2 from "./createHeading2";
import createParagraph from "./createParagraph";

function createDeleteTodoBtn(todo, project) {
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.textContent = "Delete todo";
    deleteTodoBtn.addEventListener("click", function () {
        project.deleteTodo(todo);
        this.parentElement.remove();
    });
    return deleteTodoBtn;
}

function createTodoListItem(todo, project) {
    const li = document.createElement("li");

    const todoTitle = createParagraph(todo.title);
    li.appendChild(todoTitle);

    const todoDueDate = createParagraph(todo.dueDate);
    li.appendChild(todoDueDate);

    const deleteTodoBtn = createDeleteTodoBtn(todo, project);
    li.appendChild(deleteTodoBtn);

    return li;
}

function createListOfTodos(project) {
    const listOfTodos = document.createElement("ol");
    for (const todo of project.todos) {
        const todoListItem = createTodoListItem(todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

function createAddNewTodoBtn(listOfTodos, project) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const title = prompt("Title:");
        const newTodo = new Todo(title);
        project.addTodo(newTodo);

        const todoListItem = createTodoListItem(newTodo, project);
        listOfTodos.appendChild(todoListItem);
    });
    return addTodoBtn;
}

function loadProject(project) {
    const main = document.querySelector("main");

    const tabTitle = createHeading2(project.title);
    main.appendChild(tabTitle);

    const todosOfProject = createListOfTodos(project);
    main.appendChild(todosOfProject);

    const addTodoBtn = createAddNewTodoBtn(todosOfProject, project);
    main.appendChild(addTodoBtn);
}

export default loadProject;