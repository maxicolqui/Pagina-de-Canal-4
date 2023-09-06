import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsaleComponent } from './hotsale.component';

describe('HotsaleComponent', () => {
  let component: HotsaleComponent;
  let fixture: ComponentFixture<HotsaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotsaleComponent]
    });
    fixture = TestBed.createComponent(HotsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
