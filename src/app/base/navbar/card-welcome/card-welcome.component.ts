import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-card-welcome',
    templateUrl: './card-welcome.component.html',
    styleUrls: ['./card-welcome.component.scss'],
    standalone: true,
    imports: [CardModule]
})
export class CardWelcomeComponent {

}
