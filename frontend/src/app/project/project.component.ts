import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

const PROJECTS: Project[] = [
  { name: 'Gytetokt 2004' },
  { name: 'Tobis 2006' }
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedProject  =  PROJECTS[0];
  }

  projects = PROJECTS;
  selectedProject: Project;

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
