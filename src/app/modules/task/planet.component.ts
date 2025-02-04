import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import introJs from 'intro.js';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/core/services/dialog.service';
import { PlanetService } from 'src/app/core/services/planet-service.service';
import { RemoveSecurityImgPipe } from 'src/app/pipe/remove-security-img.pipe';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  providers: [RemoveSecurityImgPipe]
})
export class ImageComponent implements OnInit {

  planets: any;
  formPlanet!: FormGroup;
  isProgressSpinner: boolean = false;
  totalRecords: number = 0;
  first: number = 0;
  rows: number = 5;
  displayPlanetDialog = false;
  selectedPlanet: any;
  displayedPlanets: any;
  sortOrder: string = 'asc';

  constructor(
    private planetService: PlanetService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService
  ) {
  }

  ngOnInit(): void {

    this.formPlanet = this.formBuilder.group({
      planetName: ['', [Validators.pattern(/^[A-Za-z0-9 :]*$/), Validators.maxLength(20)]]
    });

    this.listPlanet();
  }

  listPlanet() {
    let dataForm = this.formPlanet.getRawValue();
    const filters = Object.keys(dataForm)
      .filter((key) => dataForm[key] !== null)
      .reduce((acc, key) => {
        let value = dataForm[key];
        acc[key] = value;
        return acc;
      }, {} as any);

    filters.order = this.sortOrder;
    this.isProgressSpinner = true;
    this.planetService.get(filters)
      .subscribe({
        next: (res) => {
          this.isProgressSpinner = false;
          this.planets = res.planets;
          this.totalRecords = res.totalRegisters;
          this.updatePagedPlanets();
        },
        error: (error) => {
          this.isProgressSpinner = false;
          this.toasterService.error(error.message);
        }
      }
      )
  }

  savePlanetDialog() {
    this.dialogService
      .savePlanetDialog()
      .subscribe((data: any) => {
        if (data) {
          this.formPlanet.reset();
          this.listPlanet();
        }
      });
  }

  deletePlanetDialog(data: any) {
    this.dialogService
      .deletePlanetDialog(data)
      .subscribe((data: any) => {
        if (data) {
          this.formPlanet.reset();
          this.listPlanet();
        }
      });
  }

  updateFavorites(data: any) {
    this.isProgressSpinner = true;
    let updatedPlanetFavorite = (data.planetFavorite == 0) ? 1 : 0;
    let dataUpdateFavorite = {
      id: data._id,
      planetFavorite: updatedPlanetFavorite
    }
    this.planetService.updateFavorite(dataUpdateFavorite).subscribe({
      next: () => {
        this.isProgressSpinner = false;
        this.formPlanet.reset();
        this.listPlanet();
        let isAddOrRemove = updatedPlanetFavorite == 1 ? "agregado a" : "quitado de";
        this.toasterService.success("El planeta " +data.planetName+ " fue " + isAddOrRemove + " favoritos")
      },
      error: (error) => {
        this.isProgressSpinner = false;
        this.toasterService.error(error.message);
      }
    })
  }

  cleanFilterPlanet() {
    this.formPlanet.reset();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.listPlanet();
  }

  showPlanetDetails(planet: any) {
    this.selectedPlanet = planet;
    this.displayPlanetDialog = true;
  }

  updatePagedPlanets() {
    const startIndex = this.first;
    const endIndex = this.first + this.rows;
    this.displayedPlanets = this.planets.slice(startIndex, endIndex);
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.listPlanet();
  }
}
