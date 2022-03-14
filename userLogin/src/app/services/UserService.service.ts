import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User.model';
import {map} from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){}
    
    // Local storageden currentUseri çeker eğer yoksa boş objeye eşitler.
    getLocalStorage(){
        return JSON.parse(localStorage.getItem('currentUser') || '{}') 
    }

    // getLocalStorage() den gelen objede name propertysi varsa true yoksa false döner.
    isLogIn(){
        return this.getLocalStorage().hasOwnProperty("name")==true
    }

    // json-server lokasyonu.
    getUserList(){
        return this.http.get("http://localhost:3000/user")
    }
    
    // jsona kullanıcı ekler.
    addUser(user:any){
        return this.http.post("http://localhost:3000/user",user)
    }
}