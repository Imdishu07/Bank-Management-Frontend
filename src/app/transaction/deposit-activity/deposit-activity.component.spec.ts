import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositActivityComponent } from './deposit-activity.component';

describe('DepositActivityComponent', () => {
  let component: DepositActivityComponent;
  let fixture: ComponentFixture<DepositActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
