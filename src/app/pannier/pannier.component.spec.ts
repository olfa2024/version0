import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannierComponent } from './pannier.component';

describe('PannierComponent', () => {
  let component: PannierComponent;
  let fixture: ComponentFixture<PannierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PannierComponent]
    });
    fixture = TestBed.createComponent(PannierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
