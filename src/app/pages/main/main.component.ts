import { Component, ViewChild } from '@angular/core';
import { BusinessCardComponent } from './business-card/business-card.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @ViewChild(BusinessCardComponent)
  BusinessCard!: BusinessCardComponent;
}
