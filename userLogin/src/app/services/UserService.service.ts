import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User.model';
import {map} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){}
    
    getLocalStorage(){
        return JSON.parse(localStorage.getItem('currentUser') || '{}') 
    }

    isLogIn(){
        return this.getLocalStorage().hasOwnProperty("name")==true
    }

    getUserList(){
        return this.http.get("http://localhost:3000/user")
    }
    
    addUser(user:any){
        return this.http.post("http://localhost:3000/user",user)
    }
}