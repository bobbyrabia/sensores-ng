import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Sensores',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Nodo 1',
                        icon: 'pi pi-fw pi-box',
                        items: [
                            {
                                label: 'Resumen general',
                                icon: 'pi pi-fw pi-chart-bar',
                                routerLink: ['general/']
                            },
                            {
                                label: 'Temperatura',
                                icon: 'pi pi-fw pi-sun',
                                routerLink: ['node/temp']
                            },
                            {
                                label: 'Humedad',
                                icon: 'pi pi-fw pi-hourglass ',
                                routerLink: ['node/hum']
                            },
                            {
                                label: 'Presión barométrica',
                                icon: 'pi pi-fw pi-check-square',
                                routerLink: ['node/atm-preassure']
                            },
                            {
                                label: 'Dióxido de carbono',
                                icon: 'pi pi-fw pi-cloud',
                                routerLink: ['node/co2']
                            },
                            {
                                label: 'Velocidad del viento',
                                icon: 'pi pi-fw pi-sync',
                                routerLink: ['node/wind']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Cámaras',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Dron 1',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Resumen general',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['drone/']
                            },
                        ]
                    }
                ]
            }
        ];
    }
}
