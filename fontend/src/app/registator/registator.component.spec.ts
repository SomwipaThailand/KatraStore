import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistatorComponent } from './registator.component';

describe('RegistatorComponent', () => {
  let component: RegistatorComponent;
  let fixture: ComponentFixture<RegistatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
