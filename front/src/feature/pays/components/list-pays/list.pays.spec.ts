import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPays } from './list.pays';

describe('ListPays', () => {
  let component: ListPays;
  let fixture: ComponentFixture<ListPays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPays],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
