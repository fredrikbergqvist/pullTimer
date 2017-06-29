import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MobTimer} from '../mobTimer';

@Component({
    selector: 'app-timer-form',
    templateUrl: './timer-form.component.html',
    styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {

    @Output() onTimerAdded:EventEmitter<MobTimer> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
