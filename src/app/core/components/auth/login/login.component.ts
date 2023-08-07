import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {FormGroup, NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../http/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    form!:FormGroup;
    creds={
        username:"dstribling0",
        password:"lH8%2u|ihO@'I"
    }

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public router:Router, public layoutService: LayoutService, private authenticationService:AuthenticationService) { }
    login(form:NgForm){
        this.authenticationService.login(this.creds).subscribe(res=>{
            console.log(res);
            this.router.navigate([' ']);
        })
    }
}
