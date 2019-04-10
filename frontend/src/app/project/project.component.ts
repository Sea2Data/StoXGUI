import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
    this.onSelect(this.projects[0]);
  }

  onSelect(project: Project): void {
    this.projectService.setSelectedProject(project);
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  getSelectedProject(): Project {
    return this.projectService.getSelectedProject();
  }
}
