import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/UserService.service";

@Component({
    selector:'dashboard-selector',
    templateUrl:'./Dashboard.component.html',
    styleUrls:['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    constructor(private router:Router,private userService:UserService) {}

    currentUser:any =undefined;

    logout(){
        localStorage.clear();
        this.router.navigate(['./SignIn'])
    }
    
    ngOnInit(): void {
        if(this.userService.isLogIn()){
            let tmp = this.userService.getLocalStorage();
            this.currentUser=tmp;
        }else{
            this.router.navigate(['./SignIn'])
        }
    }

}