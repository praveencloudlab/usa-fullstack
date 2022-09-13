import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtngenComponent } from './btngen.component';

describe('BtngenComponent', () => {
  let component: BtngenComponent;
  let fixture: ComponentFixture<BtngenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtngenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtngenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
