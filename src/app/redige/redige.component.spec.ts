import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedigeComponent } from './redige.component';

describe('RedigeComponent', () => {
  let component: RedigeComponent;
  let fixture: ComponentFixture<RedigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
