import {Component, Input, OnInit} from '@angular/core';
import {MobTimer} from '../mobTimer';

@Component({
    selector: 'app-timer-item',
    templateUrl: './timer-item.component.html',
    styleUrls: ['./timer-item.component.scss']
})
export class TimerItemComponent implements OnInit {

    @Input() timer:MobTimer;

    constructor() { }

    ngOnInit() {
    }

    onTimerAdded(timer:MobTimer) {

    }

}
