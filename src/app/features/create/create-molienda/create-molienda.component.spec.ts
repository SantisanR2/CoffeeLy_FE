import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoliendaComponent } from './create-molienda.component';

describe('CreateMoliendaComponent', () => {
  let component: CreateMoliendaComponent;
  let fixture: ComponentFixture<CreateMoliendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMoliendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMoliendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
