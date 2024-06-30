import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRoutingComponent } from './dynamic-routing.component';

describe('DynamicRoutingComponent', () => {
  let component: DynamicRoutingComponent;
  let fixture: ComponentFixture<DynamicRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
