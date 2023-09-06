import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combodou100Component } from './combodou100.component';

describe('Combodou100Component', () => {
  let component: Combodou100Component;
  let fixture: ComponentFixture<Combodou100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Combodou100Component]
    });
    fixture = TestBed.createComponent(Combodou100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
