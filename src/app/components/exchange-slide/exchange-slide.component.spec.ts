import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSlideComponent } from './exchange-slide.component';

describe('ExchangeSlideComponent', () => {
  let component: ExchangeSlideComponent;
  let fixture: ComponentFixture<ExchangeSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
