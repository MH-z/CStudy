import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlgialanlariComponent } from './ilgialanlari.component';

describe('IlgialanlariComponent', () => {
  let component: IlgialanlariComponent;
  let fixture: ComponentFixture<IlgialanlariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlgialanlariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlgialanlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
