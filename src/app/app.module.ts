import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoolsAndCowsComponent } from './bools-and-cows/bools-and-cows.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BoolsAndCowsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
