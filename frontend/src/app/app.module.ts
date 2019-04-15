import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProjectComponent } from './project/project.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { ProcessComponent } from './process/process.component';
import { TabViewModule } from 'primeng/primeng';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TabViewModule,
    AngularSplitModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    FileUploadComponent,
    ProjectComponent,
    MapComponent,
    ProcessComponent
  ],
  bootstrap: [HomeComponent],
  providers: []
})
export class AppModule { }
