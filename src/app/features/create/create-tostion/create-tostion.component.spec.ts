import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTostionComponent } from './create-tostion.component';

describe('CreateTostionComponent', () => {
  let component: CreateTostionComponent;
  let fixture: ComponentFixture<CreateTostionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTostionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTostionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
