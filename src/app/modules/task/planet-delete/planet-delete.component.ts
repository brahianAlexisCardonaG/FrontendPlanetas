import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PlanetService } from 'src/app/core/services/planet-service.service';

@Component({
  selector: 'app-planet-delete',
  templateUrl: './planet-delete.component.html',
  styleUrls: ['./planet-delete.component.scss']
})
export class PlanetDeleteComponent implements OnInit {

  dataPlanet: any;
  mensajeError: any;
  isProgressSpinner: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PlanetDeleteComponent>,
    private planetService: PlanetService,
    private toasterService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataPlanet = data.data
  }

  ngOnInit(): void {

  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      this.isProgressSpinner = true;
      this.planetService.delete(this.dataPlanet._id).subscribe({
        next: (image) => {
          this.isProgressSpinner = false;
          this.dialogRef.close(image);
          this.toasterService.success('Planeta eliminado exitosamente')
        },
        error: (error) => {
          this.isProgressSpinner = false;
          this.toasterService.error(error.message)
        }
      })
    }
  }

}
