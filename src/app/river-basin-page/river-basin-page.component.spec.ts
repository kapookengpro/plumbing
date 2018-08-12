import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverBasinPageComponent } from './river-basin-page.component';

describe('RiverBasinPageComponent', () => {
  let component: RiverBasinPageComponent;
  let fixture: ComponentFixture<RiverBasinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverBasinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverBasinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
