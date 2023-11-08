import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ipost } from './module/Ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posturl: string = `${environment.baseurl}/posts.json`

  constructor(private _http: HttpClient) { }


  getallpost(): Observable<Ipost[]> {
    return this._http.get<Ipost[]>(this.posturl)
      .pipe(
        map(res => {
          const postArray = []
          for (const key in res) {
            console.log(res[ key ])
            let obj = {
              ...res[ key ],
              id: key
            }
            console.log(obj)
            postArray.push(obj)
            console.log(postArray)
          }
          return postArray;

        })

      )
  }


  getsinglepost(id: any): Observable<Ipost> {
    let postUrl = `${environment.baseurl}/posts/${id}.json`
    return this._http.get<Ipost>(this.posturl)
  }






}
