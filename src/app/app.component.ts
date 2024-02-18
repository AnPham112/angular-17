import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'basic-angular';
  name: string = 'John';
  user = { name: 'Anonymous' };
  isLifeCycleVisible: boolean = false;

  handleUpdateName() {
    this.name = "Johnson's baby";
  }

  handleChangeTitle() {
    this.title = 'random title ' + Math.random();
  }

  handleChangeUser() {
    this.user.name = 'New name ' + Math.random();
  }

  handleToggleLifecycle() {
    this.isLifeCycleVisible = !this.isLifeCycleVisible;
  }
}
