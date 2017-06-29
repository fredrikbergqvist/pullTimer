import {Component} from '@angular/core';
import {MobTimer} from './mobTimer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  timers:MobTimer[] = [];

}
