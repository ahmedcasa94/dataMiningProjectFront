import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ResultatComponent } from './resultat/resultat.component';
import { FormsModule } from '@angular/forms';
import {ServiceService} from "./service.service";
@NgModule({
  declarations: [
    AppComponent,
    ResultatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
