import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMuseumFormComponent } from './create-museum-form.component';

describe('CreateMuseumFormComponent', () => {
  let component: CreateMuseumFormComponent;
  let fixture: ComponentFixture<CreateMuseumFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMuseumFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMuseumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
