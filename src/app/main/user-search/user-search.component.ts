import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalDialogService} from '../../shared/modal-dialog.service';
import {FormControl, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(private readonly routes: Router) {}

  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.routes.navigate(['/user/', this.name.value]);
  }

}
