import { TaskManger } from "./taskManager";

const manager= new TaskManger()

manager.addTask("test1")
manager.addTask("test2")
manager.addTask("test3")

console.log(manager.listTask())

const tasks= manager.listTask()

manager.markAsCompleted(tasks[0].id)

console.log(manager.listTask())