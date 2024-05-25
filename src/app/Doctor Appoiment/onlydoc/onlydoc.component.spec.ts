import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlydocComponent } from './onlydoc.component';

describe('OnlydocComponent', () => {
  let component: OnlydocComponent;
  let fixture: ComponentFixture<OnlydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlydocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
