import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetsComponent } from './intranets.component';

describe('IntranetsComponent', () => {
  let component: IntranetsComponent;
  let fixture: ComponentFixture<IntranetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntranetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
