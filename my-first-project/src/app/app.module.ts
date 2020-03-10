import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourcesComponent } from './cources/cources.component';
import { CourceService } from './cources/cources.service';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
