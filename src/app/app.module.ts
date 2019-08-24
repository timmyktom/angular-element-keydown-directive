import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementKeyDownClickDirective } from './element-key-down-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ElementKeyDownClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
