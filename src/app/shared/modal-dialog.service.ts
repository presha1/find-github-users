import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  constructor(private readonly matDialog: MatDialog) { }

  /**
   * Opens a confirmation dialog and returning the result of the clicked action.
   */
  showConfirmationDialog(title: string, message: string): MatDialogRef<ConfirmationModalComponent> {
    return this.matDialog.open(ConfirmationModalComponent, {
      data: {title, message}
    });
  }
}
