import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }
  onsubmit():Observable<any[]>{
    return this.httpclient.get<any[]>("http://localhost:3000/posts");
  }
  save(data:any){
    return this.httpclient.post(" http://localhost:3000/posts",data)
  }
}
