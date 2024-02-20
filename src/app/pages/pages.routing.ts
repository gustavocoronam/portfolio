import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { MainComponent } from './main/main.component';
import { SecondaryProjectsComponent } from './secondary-projects/secondary-projects.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      component: MainComponent
    },
    {
      path: 'secondary-projects',
      component: SecondaryProjectsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
