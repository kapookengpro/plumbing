import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHelperComponent } from './icon-helper.component';

describe('IconHelperComponent', () => {
  let component: IconHelperComponent;
  let fixture: ComponentFixture<IconHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
