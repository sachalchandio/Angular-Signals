import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from 'src/app/todos/todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-user-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTodosComponent {
  // Inject the UserService
  todoService = inject(TodoService);

  // Variables that don't change value
  pageTitle = 'User Tasks';

  // Expose the state as signals
  userTasks = this.todoService.userTasks;

  // Mark as completed
  markComplete(task: ToDo) {
    this.todoService.markComplete(task);
  }
}
