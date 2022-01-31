import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInputComponent } from './inicio-input.component';

describe('InicioInputComponent', () => {
  let component: InicioInputComponent;
  let fixture: ComponentFixture<InicioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
