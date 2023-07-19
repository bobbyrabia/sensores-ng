import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temperature } from 'src/app/types/temperature.types';
import { main } from '@angular/compiler-cli/src/main';
import { map } from 'rxjs/operators';
import { User } from '../../types/user.types';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // private readonly URL: string =
    //     'http://127.0.0.1:5000/api/v1/sensors/storage-data/temperature';
    constructor(private httpClient: HttpClient) {}
    login(creds: User) {
        return this.httpClient
            .post('http://localhost:8080', creds, {
                observe: 'response',
            })
            .pipe(
                map((response: HttpResponse<any>) => {
                    const body = response.body;
                    const headers = response.headers;
                    const bearerToken = headers.get('Authorization')!;
                    const token = bearerToken.replace('Bearer', '');
                    localStorage.setItem('token', token);
                    return body;
                })
            );
    }
    getToken() {
        return localStorage.getItem('token');
    }
}
