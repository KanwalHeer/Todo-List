import todolist from "./myTodo1";

const todoList = new todolist();

// Adding todos
todoList.addTodo("Learn TypeScript");
todoList.addTodo("Learn Python");
todoList.addTodo("Practice coding");

// Marking a todo as completed
todoList.markTaskAsCompleted(0);

// Deleting a todo
todoList.deleteTodo(0);

// Viewing todos
console.log("My Todo List:");
todoList.getTodo();





console.log("kanwal")
