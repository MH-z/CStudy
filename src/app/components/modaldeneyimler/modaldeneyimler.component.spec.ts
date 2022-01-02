import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldeneyimlerComponent } from './modaldeneyimler.component';

describe('ModaldeneyimlerComponent', () => {
  let component: ModaldeneyimlerComponent;
  let fixture: ComponentFixture<ModaldeneyimlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldeneyimlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldeneyimlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
