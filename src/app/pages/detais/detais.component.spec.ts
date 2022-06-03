import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaisComponent } from './detais.component';

describe('DetaisComponent', () => {
  let component: DetaisComponent;
  let fixture: ComponentFixture<DetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
