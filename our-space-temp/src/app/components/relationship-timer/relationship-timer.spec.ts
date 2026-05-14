import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipTimer } from './relationship-timer';

describe('RelationshipTimer', () => {
  let component: RelationshipTimer;
  let fixture: ComponentFixture<RelationshipTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationshipTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
