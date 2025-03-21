import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: { id: number; description: string; completed: boolean }[] = [];
  filteredTasks: { id: number; description: string; completed: boolean }[] = [];
  filter: 'all' | 'completed' | 'incomplete' = 'all'; // Standardmäßig "Alle"

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe(updatedTasks => {
      this.tasks = updatedTasks;
      this.applyFilter();
    });
  }

  // Filter ändern
  setFilter(filter: 'all' | 'completed' | 'incomplete') {
    this.filter = filter;
    this.applyFilter();
  }

  // Filter anwenden
  applyFilter() {
    if (this.filter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  // Aufgabe als erledigt/nicht erledigt markieren
  toggleCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  // Aufgabe löschen
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}

