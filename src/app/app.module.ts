import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LgTableComponent } from './components/shared/lg-table/lg-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LgTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
