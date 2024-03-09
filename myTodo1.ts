import Todo from "./myTodo"
//make class of todolist
class todolist {
    todos : Todo[]

    constructor(){
    this.todos=[]
    }
//make a function for adding tasks
    addTodo(task:string){
        const newTodo = new Todo(task)
        this.todos.push(newTodo) 
    }

    //make function for make sure that task is completed
    markTaskAsCompleted(index:number){
    if (index >= 0 && index < this.todos.length) {
        this.todos[index].isComplete= true
    }
    }

    //add a function for deleting a task
    deleteTodo(index:number){
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index,1)
        }
    }

    //make a function for getting our tasks
    getTodo(){
        this.todos.forEach((todo,index)=>{
            console.log(`${index + 1}.${todo.isComplete ? "x" : "[]"} ${todo.task}`)
        })
}
}
export default todolist;