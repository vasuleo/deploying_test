import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironementTestComponent } from './environement-test.component';

describe('EnvironementTestComponent', () => {
  let component: EnvironementTestComponent;
  let fixture: ComponentFixture<EnvironementTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironementTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironementTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
