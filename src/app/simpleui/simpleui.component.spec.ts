import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleuiComponent } from './simpleui.component';

describe('SimpleuiComponent', () => {
  let component: SimpleuiComponent;
  let fixture: ComponentFixture<SimpleuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleuiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
