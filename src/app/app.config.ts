import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    TaskListComponent
  ]
};

