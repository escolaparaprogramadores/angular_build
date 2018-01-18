import {Component, trigger, state, transition, style, animate} from '@angular/core';

import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app-inline-profile',
    template: `
        <div class="profile" [ngClass]="{'profile-expanded':active}">
            <a href="#" (click)="onClick($event)">
                <img class="profile-image avatar" src="assets/layout/images/alexandre.jpg" />
                <span class="profile-name">{{auth.getUser().name}}
                </span>
                <i class="material-icons">keyboard_arrow_down</i>
            </a>
        </div>

        <ul class="ultima-menu profile-menu" [@menu]="active ? 'visible' : 'hidden'">
            <li role="menuitem">
                <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons">build</i>
                    <span>Alterar senha</span>
                </a>
            </li>

            <li role="menuitem">
                <a href="#"  class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                    <i class="material-icons" power_settings_new></i>
                    <span>Sair</span>
                </a>
            </li>
        </ul>
    `,
    animations: [
        trigger('menu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppInlineProfileComponent {

    active: boolean;

    onClick(event) {
        this.active = !this.active;
        event.preventDefault();
    }

    constructor(public auth:AuthService) {}

    //(click)="logout($event)
    logout(e) {
        e.preventDefault();
        this.auth.logout();
    }
}
