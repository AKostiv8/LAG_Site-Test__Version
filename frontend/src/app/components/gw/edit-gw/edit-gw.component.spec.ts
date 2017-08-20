import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGwComponent } from './edit-gw.component';

describe('EditGwComponent', () => {
  let component: EditGwComponent;
  let fixture: ComponentFixture<EditGwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
