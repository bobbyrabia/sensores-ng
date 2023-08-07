import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BarometricPressure } from 'src/app/types/barometric-pressure.types';
import { LiveData } from 'src/app/types/live-data.types';
import { Luminosity } from 'src/app/types/luminosity.types';
import { RelativeHumidity } from 'src/app/types/relative-humidity.types';
import { Temperature } from 'src/app/types/temperature.types';
import { environment } from 'src/environments/environment';

const URL = environment.base_url_sensors;
const BASE_URL_LIVE_DATA = URL + '/sensors/live-data';
const BASE_URL_STORAGE_DATA = URL + '/sensors/storage-data';

@Injectable({
  providedIn: 'root'
})
export class SensorsStorageDataService {

  constructor(private http: HttpClient) { }

  public getTemperature(): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(`${BASE_URL_STORAGE_DATA}/temperature`);
  }

  public getRelativeHumidity(): Observable<RelativeHumidity[]> {
    return this.http.get<RelativeHumidity[]>(`${BASE_URL_STORAGE_DATA}/relative-humidity`);
  }

  public getLuminosity(): Observable<Luminosity[]> {
    return this.http.get<Luminosity[]>(`${BASE_URL_STORAGE_DATA}/luminosity`);
  }

  public getBarometricPressure(): Observable<BarometricPressure[]> {
    return this.http.get<BarometricPressure[]>(`${BASE_URL_STORAGE_DATA}/barometric-pressure`);
  }

  public getLiveData(): Observable<LiveData> {
    return this.http.get<LiveData>(`${BASE_URL_STORAGE_DATA}/barometric-pressure`);
  }
}
