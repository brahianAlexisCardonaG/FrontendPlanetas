import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-component-spinner',
    templateUrl: './component-spinner.component.html',
    styleUrls: ['./component-spinner.component.scss'],
    standalone: true,
    imports: [ProgressSpinnerModule]
})
export class ComponentSpinnerComponent {

}
