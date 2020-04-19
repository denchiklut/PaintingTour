import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtMovementFormComponent } from './create-art-movement-form.component';

describe('CreateArtMovementFormComponent', () => {
  let component: CreateArtMovementFormComponent;
  let fixture: ComponentFixture<CreateArtMovementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArtMovementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArtMovementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
