import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  projects: City[];
  selectedProject: City;
  constructor(private ps: ProjectService) {

    this.projects = [
      { name: 'Tobis 2017'},
      { name: 'Tobis 2018'},
      { name: 'Tobis 2019'},
      { name: 'Makrell 2016'},
      { name: 'Makrell 2017'},
      { name: 'Makrell 2018'}
    ];
    this.selectedProject = this.projects[1];
  }

  ngOnInit() {
  }

}

class City {
  name: string;
}
