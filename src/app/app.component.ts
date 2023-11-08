import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'practice1';

  constructor(private _post: PostService) { }

  ngOnInit(): void {

    this._post.getallpost()
      .subscribe(res => {
        console.log(res)
      })


    this._post.getsinglepost("Nijp-iECbp59XvOBOwh")
      .subscribe(res => {
        console.log(res)
      })



  }


}
