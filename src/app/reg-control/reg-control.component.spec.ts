import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegControlComponent } from './reg-control.component';

describe('RegControlComponent', () => {
  let component: RegControlComponent;
  let fixture: ComponentFixture<RegControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
