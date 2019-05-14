import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Project } from './project';
import { Process } from './process';

const PROJECTS: Project[] = [
  { name: 'Gytetokt 2004' },
  { name: 'Tobis 2006' },
  { name: 'Tobis 2007' },
  { name: 'Tobis 2008' },
  { name: 'Tobis 2009' },
  { name: 'Tobis 2010' },
  { name: 'Tobis 2011' },
  { name: 'Tobis 2012' },
  { name: 'Tobis 2013' },
  { name: 'Tobis 2014' },
  { name: 'Tobis 2015' },
  { name: 'Tobis 2016' },
  { name: 'Tobis 2017' },
  { name: 'Tobis 2018' },
  { name: 'Tobis 2019' },
  { name: 'Tobis 2020' },
  { name: 'Tobis 2021' }
];

const PROJECT1_BASELINE: Process[] = [
  { name: 'ReadBioticXML', model: 'baseline' },
  { name: 'ReadAcousticXML', model: 'baseline' }
];

const PROJECT2_BASELINE: Process[] = [
  { name: 'ReadBioticXML', model: 'baseline' },
  { name: 'DefineStratum', model: 'baseline' }
];


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project;

  constructor() {
    this.setSelectedProject(this.getProjects()[0]);
  }

  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }

  getSelectedProject(): Project {
    return this.selectedProject;
  }


  getProjects(): Project[] {
    return PROJECTS;
  }
  /**
   * get processes
   * @param model 
   */
  getProcesses(model: String): Process[] {
    if (this.selectedProject != null) {
      let plist: Process[];
      switch (this.selectedProject.name) {
        case 'Gytetokt 2004': plist = PROJECT1_BASELINE; break;
        case 'Tobis 2006': plist = PROJECT2_BASELINE; break;
      }
      return plist.filter(pr => pr.model === model);
    }
    return null;
  }
  /*  getObservableProjects(): Observable<Project[]> {
      return of(this.getProjects());
    }*/
}
