import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCatacionComponent } from './create-catacion.component';

describe('CreateCatacionComponent', () => {
  let component: CreateCatacionComponent;
  let fixture: ComponentFixture<CreateCatacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCatacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCatacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
