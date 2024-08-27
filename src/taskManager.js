"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManger = void 0;
var TaskManger = /** @class */ (function () {
    function TaskManger() {
        this.tasks = [];
        this.nextId = 1;
    }
    TaskManger.prototype.addTask = function (title) {
        var newTask = {
            id: this.nextId++,
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
    };
    TaskManger.prototype.listTask = function () {
        return this.tasks;
    };
    TaskManger.prototype.markAsCompleted = function (taskId) {
        var task = this.tasks.find(function (task) { return task.id === taskId; });
        if (task) {
            task.completed = true;
        }
        else {
            console.error("Task with ID ".concat(taskId, " not found."));
        }
    };
    return TaskManger;
}());
exports.TaskManger = TaskManger;
