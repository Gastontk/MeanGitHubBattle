import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {  GithubService } from './github.service'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RankingComponent } from './ranking/ranking.component';
import { OrderByPipe } from './sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RankingComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
