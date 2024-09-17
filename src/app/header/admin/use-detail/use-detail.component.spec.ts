import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseDetailComponent } from './use-detail.component';

describe('UseDetailComponent', () => {
  let component: UseDetailComponent;
  let fixture: ComponentFixture<UseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseDetailComponent]
    });
    fixture = TestBed.createComponent(UseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
