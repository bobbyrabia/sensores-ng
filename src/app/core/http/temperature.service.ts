import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temperature } from 'src/app/types/temperature.types';

@Injectable({
    providedIn: 'root',
})
export class TemperatureService {
    private readonly URL: string =
        'http://127.0.0.1:5000/api/v1/sensors/storage-data/temperature';
    constructor(private httpClient: HttpClient) {}
    getTemperature(): Observable<Temperature[]> {
        return this.httpClient.get<Temperature[]>(this.URL);
    }
}
