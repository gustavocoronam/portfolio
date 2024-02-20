import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [PagesComponent],
  exports: [PagesComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, MainModule],
})
export class PagesModule {}
