import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SensorsStorageDataService } from 'src/app/core/service/sensors-storage-data.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Temperature } from 'src/app/types/temperature.types';

@Component({
  selector: 'app-temperature-main',
  templateUrl: './temperature-main.component.html',
  styleUrls: ['./temperature-main.component.scss']
})
export class TemperatureMainComponent implements OnInit, OnDestroy {

  lineData: any;
  lineOptions: any;

  temperatures: Temperature[] = [];
  subscription: Subscription;

  constructor(
    public layoutService: LayoutService,
    private sensorsStorageDataService: SensorsStorageDataService
  ) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      // this.getTemperatureData();
      this.buildChart();
    });
  }

  ngOnInit(): void {
    // this.getTemperatureData();
    this.buildChart();
  }

  getTemperatureData() {
    this.sensorsStorageDataService.getTemperature().subscribe(res => {
      this.temperatures = res;
      this.buildChart();
    });
  }

  buildChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.lineData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [
        {
            label: 'Temperatura promedio capturada por el Sensor',
            data: [26, 18, 25, 21, 26, 25, 30, 23, 27, 24, 25, 22],
            fill: false,
            backgroundColor: documentStyle.getPropertyValue('--primary-500'),
            borderColor: documentStyle.getPropertyValue('--primary-500'),
            tension: .4
        }
        // ,{
        //   label: 'Límite',
        //   data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        //   fill: false,
        //   backgroundColor: documentStyle.getPropertyValue('--red-500'),
        //   borderColor: documentStyle.getPropertyValue('--red-500'),
        //   tension: .4
        // }
      ]
    };

    this.lineOptions = {
      plugins: {
          legend: {
              labels: {
                  fontColor: textColor
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
      }
    };

  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }

}
