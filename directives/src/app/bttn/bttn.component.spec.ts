import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnComponent } from './bttn.component';

describe('BttnComponent', () => {
  let component: BttnComponent;
  let fixture: ComponentFixture<BttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
