import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersActivityComponent } from './customers-activity.component';

describe('CustomersActivityComponent', () => {
  let component: CustomersActivityComponent;
  let fixture: ComponentFixture<CustomersActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
