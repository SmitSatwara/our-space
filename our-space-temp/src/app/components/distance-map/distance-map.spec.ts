import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceMap } from './distance-map';

describe('DistanceMap', () => {
  let component: DistanceMap;
  let fixture: ComponentFixture<DistanceMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistanceMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanceMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
