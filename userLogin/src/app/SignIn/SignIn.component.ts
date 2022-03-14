import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/User.model";
import { UserService } from "src/app/services/UserService.service";

@Component({
    selector: 'SignIn-selector',
    templateUrl: './SignIn.component.html',
    styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) { }

    users : User[]=[]
    errors: String = '';

    ngOnInit(): void {

        if(this.userService.isLogIn()){
            this.router.navigate(['./Dashboard'])
        }
        
        this.userService.getUserList().subscribe((res) => {
            this.users = res as User[];
        });
    }

    signInForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])
    })

    onSubmit() {
        if(this.checkUser()){
            let user = this.users.find((user)=>user.email==this.signInForm.get('email')?.value)
            this.writeLocalStorage(user as User);
            this.router.navigate(['/Dashboard']);
        }else{
            this.errors ='email or password is not correct'
        }
        
    }

    checkUser(){
        let isLogged=false;
        this.users.map((user) => {
            if (this.signInForm.get("email")?.value == user.email && this.signInForm.get("password")?.value == user.password) {
                isLogged=true;
            }
        })
        return isLogged;
    }

    writeLocalStorage(user: User) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    signUp() {
        this.router.navigate(['/SignUp']);
    }

}