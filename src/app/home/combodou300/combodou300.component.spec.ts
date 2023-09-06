import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Combodou300Component } from './combodou300.component';

describe('Combodou300Component', () => {
  let component: Combodou300Component;
  let fixture: ComponentFixture<Combodou300Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Combodou300Component]
    });
    fixture = TestBed.createComponent(Combodou300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
