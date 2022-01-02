import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEgitimComponent } from './modal-egitim.component';

describe('ModalEgitimComponent', () => {
  let component: ModalEgitimComponent;
  let fixture: ComponentFixture<ModalEgitimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEgitimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEgitimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
