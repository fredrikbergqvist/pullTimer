import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerFormComponent } from './timer-form/timer-form.component';
import { TimerItemComponent } from './timer-item/timer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerFormComponent,
    TimerItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
