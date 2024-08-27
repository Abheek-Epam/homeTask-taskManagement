import { Task } from "./task";
export class TaskManger{
    private tasks: Task[] = [];
    private nextId: number = 1;
    addTask (title: string): void {
        const newTask: Task = {
            id:this.nextId++,
            title,
            completed:false
        }
        this.tasks.push(newTask)
    }
    listTask (): Task[] {
        return this.tasks
    }
    markAsCompleted (taskId:number):void {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
        task.completed = true;
        } else { console.error(`Task with ID ${taskId} not found.`);
        }
    }
}