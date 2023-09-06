import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouComponent } from './dou.component';

describe('DouComponent', () => {
  let component: DouComponent;
  let fixture: ComponentFixture<DouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DouComponent]
    });
    fixture = TestBed.createComponent(DouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
