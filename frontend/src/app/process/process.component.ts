import { Component, OnInit } from '@angular/core';
import { Process } from '../process';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  constructor(private ps: ProjectService) {
  }

  ngOnInit() {
  }

}
