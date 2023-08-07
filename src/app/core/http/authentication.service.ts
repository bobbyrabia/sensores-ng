import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
    login(creds:any){
      return this.httpClient.post('http://127.0.0.1:5001/login',creds,{
           observe:"response"
        }).pipe(map((response:HttpResponse<any>)=>{
            const body=response.body;
           console.log(body);
           localStorage.setItem('body',body);
           return body;
       }));

    }
    getToken(){
      return localStorage.getItem('body');
    }
}
