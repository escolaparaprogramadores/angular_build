import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
   
        <div class="topbar clearfix">
            <div class="topbar-left">
                <div class="logo">
                <img src="assets/layout/images/logo2x.jpg" width="93%">
                </div>
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i></i>
                </a>

                <a id="rightpanel-menu-button" href="#" (click)="app.onRightPanelButtonClick($event)">
                    <i class="material-icons">more_vert</i>
                </a>

                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="material-icons">menu</i>
                </a>

                <ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                   




                    <li #messages [ngClass]="{'active-top-menu':app.activeTopbarItem === messages}">
                        <a href="#" (click)="app.onTopbarItemClick($event,messages)">
                            <i class="topbar-icon material-icons animated swing">notifications</i>
                            <span class="topbar-badge animated rubberBand">5</span>
                            <span class="topbar-item-name">Messages</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar1.png" width="35"/>
                                    <span>O relatório esta pronto</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar2.png" width="35"/>
                                    <span>Preciso falar com você</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar3.png" width="35"/>
                                    <span>Como vai?</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar2.png" width="35"/>
                                    <span>Olá</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" class="topbar-message">
                                    <img src="assets/layout/images/avatar4.png" width="35"/>
                                    <span>Boleto  enviado por e-mail</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                   
                  
                </ul>
            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppComponent) {}

}
