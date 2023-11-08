import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostdashboardComponent } from './shared/component/postdashboard/postdashboard.component';
import { EditaddpostComponent } from './shared/component/editaddpost/editaddpost.component';

const routes: Routes = [
  {
    path: "", component: PostdashboardComponent
  },
  {
    path: "posts", component: PostdashboardComponent
  },
  {
    path: "addpost", component: EditaddpostComponent
  },

  {
    path: "posts/:postId", component: EditaddpostComponent
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
