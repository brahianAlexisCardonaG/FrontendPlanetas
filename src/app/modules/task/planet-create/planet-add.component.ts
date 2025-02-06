import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PlanetService } from 'src/app/core/services/planet-service.service';
import { ComponentSpinnerComponent } from '../../../shared/component-spinner/component-spinner.component';
import { ButtonDirective } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';


@Component({
    selector: 'app-planet-add',
    templateUrl: './planet-add.component.html',
    styleUrls: ['./planet-add.component.scss'],
    standalone: true,
    imports: [CardModule, FormsModule, ReactiveFormsModule, FileUploadModule, ButtonDirective, ComponentSpinnerComponent]
})

export class PlanetAddComponent implements OnInit {
  formAddPlanet!: FormGroup;
  mensajeError = null;
  isProgressSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PlanetAddComponent>,
    private planetService: PlanetService,
    private toasterService: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.formAddPlanet = this.formBuilder.group({
      image: [null, [Validators.required]],
      planetName: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9 :]*$/), Validators.maxLength(20)]],
      planetMass: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9 :\.×\^]*$/), Validators.maxLength(20)]],
      planetDescription: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ\s,\.\(\)\-\'\"¿?¡!]*$/), Validators.maxLength(1000)]],
    });
  }

  get form() {
    return this.formAddPlanet.controls;
  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      const formData = new FormData();
      formData.append('planetName', this.formAddPlanet.get('planetName')?.value);
      formData.append('planetMass', this.formAddPlanet.get('planetMass')?.value);
      formData.append('planetDescription', this.formAddPlanet.get('planetDescription')?.value);
      formData.append('planetFavorite', JSON.stringify(0));
      formData.append('image', this.formAddPlanet.get('image')?.value);

      this.isProgressSpinner = true;
      this.planetService.save(formData).subscribe({
        next: (data) => {
          this.isProgressSpinner = false;
          this.dialogRef.close(data);
          this.toasterService.success('Planeta guardado exitosamente');
        },
        error: (error) => {
          this.isProgressSpinner = false;
          try {
            for (let field of error) {
              this.toasterService.error(field.message, 'Error');
            }
          } catch (e) {
            this.mensajeError = error.message;
          }
        },
      });
    } else {
      this.toasterService.error(
        'Por favor, revisa tu conexión a internet',
        'Error'
      );
    }
  }

  onFileSelect(event: any): void {
    const file = event.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
              if (blob) {
                const convertedFile = new File([blob], `${file.name.split('.')[0]}.png`, {
                  type: 'image/png',
                });
                this.formAddPlanet.get('image')?.setValue(convertedFile);
                this.cdr.detectChanges();
              }
            }, 'image/png');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  }

}
