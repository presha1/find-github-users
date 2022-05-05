import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

interface DialogConfig {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  title = '';
  message = '';

  constructor(
    private readonly dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly dialogConfig: DialogConfig
  ) {}

  ngOnInit(): void {
    this.title = this.dialogConfig.title;
    this.message = this.dialogConfig.message;
  }

  public okClick(): void {
    this.dialogRef.close(true);
  }

  public cancelClick(): void {
    this.dialogRef.close(false);
  }

}
