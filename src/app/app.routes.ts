import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent:()=> import("./base/navbar/card-welcome/card-welcome.component").then(c=> c.CardWelcomeComponent)
  },
  {
    path: 'planetas',
    loadComponent:()=> import("./modules/task/planet.component").then(c=> c.PlanetComponent)
  },
  {
    path: 'others',
    loadComponent:()=> import("./shared/section-not-found/section-not-found.component").then(c=> c.SectionNotFoundComponent)
  },

];
