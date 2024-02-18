import { Component, Input } from '@angular/core';
import { counterTransform } from '../../transform/counter.transform';

@Component({
  selector: 'angular-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input({ required: true, transform: counterTransform }) counter: number = 0;
  @Input() showMessage: boolean = false;
  @Input() message: string = '';
  showCounter: boolean = false;
}
