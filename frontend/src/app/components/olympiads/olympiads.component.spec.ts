import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiadsComponent } from './olympiads.component';

describe('OlympiadsComponent', () => {
  let component: OlympiadsComponent;
  let fixture: ComponentFixture<OlympiadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlympiadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlympiadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
