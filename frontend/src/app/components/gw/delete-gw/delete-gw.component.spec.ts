import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGwComponent } from './delete-gw.component';

describe('DeleteGwComponent', () => {
  let component: DeleteGwComponent;
  let fixture: ComponentFixture<DeleteGwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
