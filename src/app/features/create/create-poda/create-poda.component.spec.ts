import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePodaComponent } from './create-poda.component';

describe('CreatePodaComponent', () => {
  let component: CreatePodaComponent;
  let fixture: ComponentFixture<CreatePodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
