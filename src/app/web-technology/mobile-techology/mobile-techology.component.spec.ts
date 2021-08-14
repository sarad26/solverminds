import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTechologyComponent } from './mobile-techology.component';

describe('MobileTechologyComponent', () => {
  let component: MobileTechologyComponent;
  let fixture: ComponentFixture<MobileTechologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTechologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTechologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
