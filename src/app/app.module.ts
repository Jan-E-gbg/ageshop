import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ManufacturesComponent } from './manufactures/manufactures.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ManufacturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BrowserModule, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
