import { Component, OnInit } from '@angular/core';
import { secondaryProjectList } from 'src/app/data/projects.dictionary';

@Component({
  selector: 'app-secondary-project',
  templateUrl: './secondary-project.component.html',
  styleUrls: ['./secondary-project.component.css'],
})
export class SecondaryProjectComponent implements OnInit {
  public secondaryProjects!: any;
  constructor() {}

  ngOnInit(): void {
    this.secondaryProjects = secondaryProjectList;
  }
}
