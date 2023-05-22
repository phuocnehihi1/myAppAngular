import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AubaucomponentComponent } from './aubaucomponent.component';

describe('AubaucomponentComponent', () => {
  let component: AubaucomponentComponent;
  let fixture: ComponentFixture<AubaucomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AubaucomponentComponent]
    });
    fixture = TestBed.createComponent(AubaucomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
