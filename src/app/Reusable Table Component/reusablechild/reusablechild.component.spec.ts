import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablechildComponent } from './reusablechild.component';

describe('ReusablechildComponent', () => {
  let component: ReusablechildComponent;
  let fixture: ComponentFixture<ReusablechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusablechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusablechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
