import { Component, ViewChild, OnInit } from '@angular/core';
import { Process } from '../process';
import { ProjectService } from '../project.service';

import { ContextMenuComponent } from 'ngx-contextmenu';

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
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  showMessage(message: any) {
    console.log(message);
  }
  toggleBreak(p: Process) {
    p.breakingui = !p.breakingui
  }
}
