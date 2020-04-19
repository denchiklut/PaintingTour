import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCountryFormComponent } from './create-country-form.component';

describe('CreateCountryFormComponent', () => {
  let component: CreateCountryFormComponent;
  let fixture: ComponentFixture<CreateCountryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCountryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCountryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
