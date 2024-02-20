import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MainModule } from './main/main.module';
import { SecondaryProjectsComponent } from './secondary-projects/secondary-projects.component';
import { SecondaryProjectComponent } from './secondary-projects/secondary-project/secondary-project.component';


@NgModule({
  declarations: [PagesComponent, SecondaryProjectsComponent, SecondaryProjectComponent],
  exports: [PagesComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, MainModule],
})
export class PagesModule {}
