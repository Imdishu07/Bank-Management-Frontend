import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawActivityComponent } from './withdraw-activity.component';

describe('WithdrawActivityComponent', () => {
  let component: WithdrawActivityComponent;
  let fixture: ComponentFixture<WithdrawActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
