import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutComponent } from './valut.component';

describe('ValutComponent', () => {
  let component: ValutComponent;
  let fixture: ComponentFixture<ValutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
