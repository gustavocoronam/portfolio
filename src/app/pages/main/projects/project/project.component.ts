import { Component, OnInit } from '@angular/core';
import { projectList } from 'src/app/data/projects.dictionary';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  public projects!: any;
  constructor() {}

  ngOnInit(): void {
    this.projects = projectList;
  }
}
