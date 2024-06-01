import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsearcgComponent } from './newsearcg.component';

describe('NewsearcgComponent', () => {
  let component: NewsearcgComponent;
  let fixture: ComponentFixture<NewsearcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsearcgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsearcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
