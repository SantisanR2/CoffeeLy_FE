import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfComponent } from './editf.component';

describe('EditfComponent', () => {
  let component: EditfComponent;
  let fixture: ComponentFixture<EditfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
