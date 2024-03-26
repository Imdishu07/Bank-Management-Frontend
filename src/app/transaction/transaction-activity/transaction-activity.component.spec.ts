import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionActivityComponent } from './transaction-activity.component';

describe('TransactionActivityComponent', () => {
  let component: TransactionActivityComponent;
  let fixture: ComponentFixture<TransactionActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
