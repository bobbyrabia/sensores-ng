import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload } from 'src/app/types/payload.types';
import { environment } from 'src/environments/environment';

const URL = environment.base_url_sensors;
const BASE_URL = URL + '/payload';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Payload> {
    return this.http.get<Payload>(`${BASE_URL}`);
  }
}

