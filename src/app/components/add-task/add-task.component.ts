import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = ''; // Eingabefeld leeren
    }
  }
}

