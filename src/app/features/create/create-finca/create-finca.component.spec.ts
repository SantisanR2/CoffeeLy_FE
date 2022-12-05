import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFincaComponent } from './create-finca.component';

describe('CreateFincaComponent', () => {
  let component: CreateFincaComponent;
  let fixture: ComponentFixture<CreateFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
