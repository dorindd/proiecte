import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainparentComponent } from './mainparent.component';

describe('MainparentComponent', () => {
  let component: MainparentComponent;
  let fixture: ComponentFixture<MainparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
