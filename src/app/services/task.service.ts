import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: { id: number; description: string; completed: boolean }[] = [];
  private nextId = 1;

  private tasksSubject = new BehaviorSubject(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadTasksFromLocalStorage(); // Beim Start Daten aus Local Storage laden
  }

  // Aufgaben abrufen
  getTasks() {
    return this.tasks;
  }

  // Neue Aufgabe hinzufügen
  addTask(description: string) {
    const newTask = { id: this.nextId++, description, completed: false };
    this.tasks.push(newTask);
    this.updateTasks();
  }

  // Aufgabe als erledigt/nicht erledigt markieren
  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.updateTasks();
    }
  }

  // Aufgabe löschen
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.updateTasks();
  }

  // 🔹 Aufgaben im Local Storage speichern
  private updateTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasksSubject.next(this.tasks);
  }

  // 🔹 Aufgaben aus Local Storage laden
  private loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.nextId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
      this.tasksSubject.next(this.tasks);
    }
  }
}

