import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';

const PROJECTS: Project[] = [
  { name: 'Gytetokt 2004' },
  { name: 'Tobis 2006' }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  selectedProject: Project;
  
  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  getSelectedProject(): Project {
    return this.selectedProject;
  }

  constructor() { 
    
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
