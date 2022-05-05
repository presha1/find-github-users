import { TestBed } from '@angular/core/testing';

import { ModalDialogService } from './modal-dialog.service';
import {MatDialogModule} from '@angular/material/dialog';

describe('ModalDailogService', () => {
  let service: ModalDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    });
    service = TestBed.inject(ModalDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
