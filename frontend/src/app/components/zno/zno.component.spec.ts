import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnoComponent } from './zno.component';

describe('ZnoComponent', () => {
  let component: ZnoComponent;
  let fixture: ComponentFixture<ZnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
