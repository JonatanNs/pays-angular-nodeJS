import { ComponentFixture, TestBed } from '@angular/core/testing';

import CardPays from './card-pays';

describe('CardPays', () => {
  let component: CardPays;
  let fixture: ComponentFixture<CardPays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPays],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
