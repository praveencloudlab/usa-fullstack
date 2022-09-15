import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageFundComponent } from './no-page-fund.component';

describe('NoPageFundComponent', () => {
  let component: NoPageFundComponent;
  let fixture: ComponentFixture<NoPageFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPageFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
