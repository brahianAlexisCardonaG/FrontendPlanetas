import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from '../app/app.routes';

export const appConfig: ApplicationConfig ={
    providers: [
        importProvidersFrom(BrowserModule, ButtonModule, TableModule, MatIconModule,
           ToastrModule.forRoot(), MatDialogModule, MatFormFieldModule, MatSelectModule,
            FormsModule, ReactiveFormsModule, MatInputModule, ToastModule, CardModule, TooltipModule,
             CalendarModule, MatDatepickerModule, MenubarModule, DropdownModule, MultiSelectModule,
              FileUploadModule, MessagesModule, ToastModule, ProgressSpinnerModule, PaginatorModule,
               DialogModule, MenuModule),
        provideAnimations(),
        provideToastr(),
        MessageService,
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
}
