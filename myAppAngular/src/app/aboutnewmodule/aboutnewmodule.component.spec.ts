import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutnewmoduleComponent } from './aboutnewmodule.component';

describe('AboutnewmoduleComponent', () => {
  let component: AboutnewmoduleComponent;
  let fixture: ComponentFixture<AboutnewmoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutnewmoduleComponent]
    });
    fixture = TestBed.createComponent(AboutnewmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
