import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/types/user.types';
import { TemperatureService } from '../../../http/temperature.service';
import { AuthService } from '../../../http/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    user: User = {
        email: '',
        password: '',
    };
    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private authService: AuthService
    ) {}
    login(form: NgForm) {
        console.log('form value', form.value);
        this.authService.login(this.user).subscribe((response) => {
            this.router.navigate(['/']);
        });
    }
}
