import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PlanetAddComponent } from 'src/app/modules/task/planet-create/planet-add.component';
import { PlanetDeleteComponent } from 'src/app/modules/task/planet-delete/planet-delete.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  defaultOptions = { disableClose: true };

  constructor(
    private matDialog: MatDialog,
  ) { }

  assignOptions(newInformation: any) {
    return Object.assign({}, this.defaultOptions, newInformation);
  }

  savePlanetDialog() {
    let dialogRef: MatDialogRef<PlanetAddComponent>;
    dialogRef = this.matDialog.open(PlanetAddComponent, this.defaultOptions);
    return dialogRef.afterClosed();
  }

  deletePlanetDialog(data: any) {
    let dialogRef: MatDialogRef<PlanetDeleteComponent>;
    dialogRef = this.matDialog.open(
      PlanetDeleteComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

}
