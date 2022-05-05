import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageframeComponent } from './pageframe.component';

describe('PageframeComponent', () => {
  let component: PageframeComponent;
  let fixture: ComponentFixture<PageframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
