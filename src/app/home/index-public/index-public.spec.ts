import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPublic } from './index-public';

describe('IndexPublic', () => {
  let component: IndexPublic;
  let fixture: ComponentFixture<IndexPublic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPublic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPublic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
