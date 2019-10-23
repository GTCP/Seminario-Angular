import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeercartComponent } from './beercart.component';

describe('BeercartComponent', () => {
  let component: BeercartComponent;
  let fixture: ComponentFixture<BeercartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeercartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
