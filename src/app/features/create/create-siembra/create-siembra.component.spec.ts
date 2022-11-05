import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiembraComponent } from './create-siembra.component';

describe('CreateSiembraComponent', () => {
  let component: CreateSiembraComponent;
  let fixture: ComponentFixture<CreateSiembraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSiembraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSiembraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
