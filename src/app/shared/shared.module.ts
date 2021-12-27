import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { TopheaderComponent } from './components/topheader/topheader.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    TopheaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TopheaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
