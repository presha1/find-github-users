import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ConfirmationModalComponent,
    MatDialogModule
  ]
})
export class SharedModule { }
