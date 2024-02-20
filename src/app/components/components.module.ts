import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [],
  exports: [CommonModule, ButtonModule, TooltipModule],
  imports: [CommonModule, ButtonModule, TooltipModule],
})
export class ComponentsModule {}
