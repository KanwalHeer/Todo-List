//make a class of todo
class Todo {
    task : string
    isComplete : boolean

    constructor(task:string){
        this.task = task
        this.isComplete=false
    }
}
export default Todo;