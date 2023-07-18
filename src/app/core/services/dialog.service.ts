import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MedicamentoAddComponent } from 'src/app/modules/medicamento/medicamento-add/medicamento-add.component';
import { MedicamentoDeleteComponent } from 'src/app/modules/medicamento/medicamento-delete/medicamento-delete.component';
import { MedicamentoEditComponent } from 'src/app/modules/medicamento/medicamento-edit/medicamento-edit.component';
import { VentaMedicamentoComponent } from 'src/app/modules/venta/venta-medicamento/venta-medicamento.component';

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

  guardarMedicamentoDialog() {
    let dialogRef: MatDialogRef<MedicamentoAddComponent>;
    dialogRef = this.matDialog.open(MedicamentoAddComponent, this.defaultOptions);
    return dialogRef.afterClosed();
  }

  eliminarMedicamentoDialog(data: any) {
    let dialogRef: MatDialogRef<MedicamentoDeleteComponent>;
    dialogRef = this.matDialog.open(
      MedicamentoDeleteComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

  editarMedicamentoDialog(data: any) {
    let dialogRef: MatDialogRef<MedicamentoEditComponent>;
    dialogRef = this.matDialog.open(
      MedicamentoEditComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

  venderMedicamentoDialog(data: any) {
    let dialogRef: MatDialogRef<VentaMedicamentoComponent>;
    dialogRef = this.matDialog.open(
      VentaMedicamentoComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

}
