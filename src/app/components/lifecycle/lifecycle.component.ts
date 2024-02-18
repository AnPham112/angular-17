import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'angular-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() user = { name: '' };

  private destroy$ = new Subject<void>();
  message: string = '';

  constructor() {
    console.log('constructor run');
  }

  ngOnInit(): void {
    console.log('oninit run');
    console.log('oninit run ', this.name);
    this.message = this.name + ' is added on ngoninit';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges run');
    console.log(changes);

    if (changes['name']?.currentValue) {
      const currentName = changes['name'].currentValue;
      this.message = currentName + ' is changed on ngonchanges';
    }

    if (changes['title']?.currentValue) {
      const currentTitle = changes['title'].currentValue;
    }
  }

  ngDoCheck(): void {
    console.log('ngdocheck run');
    console.log(this.user);
  }

  ngOnDestroy(): void {
    console.log('ngondestroy run');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
