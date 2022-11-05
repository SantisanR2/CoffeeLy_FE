import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFincaComponent } from './nav-finca.component';

describe('NavFincaComponent', () => {
  let component: NavFincaComponent;
  let fixture: ComponentFixture<NavFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
