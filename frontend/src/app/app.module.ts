import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProjectComponent } from './project/project.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { ProcessComponent } from './process/process.component';
// import { TabViewModule } from 'primeng/primeng';
import { AngularSplitModule } from 'angular-split';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ParameterComponent } from './parameter/parameter.component';
import { AgGridModule } from 'ag-grid-angular';
import { AngularResizedEventModule } from 'angular-resize-event';
<<<<<<< HEAD

import { HttpClientModule }    from '@angular/common/http';

=======
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/components/table/table';
>>>>>>> b0e39febe3c2306fbe72498bd019a5bd25f5e66a
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // TabViewModule,
    NgbModule,
    AngularSplitModule.forRoot(),
    AngularResizedEventModule,
    AgGridModule.withComponents([]),
<<<<<<< HEAD
    HttpClientModule
=======
    AccordionModule, 
    BrowserAnimationsModule,
    TableModule
>>>>>>> b0e39febe3c2306fbe72498bd019a5bd25f5e66a
  ],
  declarations: [
    HomeComponent,
    FileUploadComponent,
    ProjectComponent,
    MapComponent,
    ProcessComponent,
    ParameterComponent
  ],
  bootstrap: [HomeComponent],
  providers: []
})
export class AppModule { }
