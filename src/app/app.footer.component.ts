import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <div class="card clearfix">
                <span class="footer-text-left">SING - Sistema Integrado NewsGps </span>
                <span class="footer-text-right">
                    <span>Copyright</span>
                    <span class="material-icons ui-icon-copyright"></span>
                    <span>2018 Todos os direitos reservados.</span>
                </span>
            </div>
        </div>
    `
})
export class AppFooterComponent {

}
