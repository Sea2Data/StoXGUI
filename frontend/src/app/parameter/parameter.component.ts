import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ParameterComponent implements OnInit {
  cols: any[];

rowData = [
    { name: 'Process name', value: 'ReadBioticXML'},
    { name: 'Function', value: 'ReadBioticXML'},
    { name: 'Enabled', value: 'true' }
];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name', width: '50%' },
      { field: 'value', header: 'Value', width: '50%' }
    ];
  }

}
