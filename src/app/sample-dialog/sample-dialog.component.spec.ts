import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDialogComponent } from './sample-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('SampleDialogComponent', () => {
  let component: SampleDialogComponent;
  let fixture: ComponentFixture<SampleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDialogComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { name: 'test dialog #1' } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
