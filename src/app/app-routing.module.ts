import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './modules/task/planet.component';
import { SectionNotFoundComponent } from './shared/section-not-found/section-not-found.component';
import { CardWelcomeComponent } from './base/navbar/card-welcome/card-welcome.component';

const routes: Routes = [
  {
    path: '',
    component: CardWelcomeComponent
  },
  {
    path: 'planetas',
    component: ImageComponent
  },
  {
    path: 'others',
    component: SectionNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
