import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostdashboardComponent } from './shared/component/postdashboard/postdashboard.component';
import { PostComponent } from './shared/component/post/post.component';
import { EditaddpostComponent } from './shared/component/editaddpost/editaddpost.component'


@NgModule({
  declarations: [
    AppComponent,
    PostdashboardComponent,
    PostComponent,
    EditaddpostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
