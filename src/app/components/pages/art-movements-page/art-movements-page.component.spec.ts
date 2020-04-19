import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtMovementsPageComponent } from './art-movements-page.component';

describe('ArtMovementsPageComponent', () => {
  let component: ArtMovementsPageComponent;
  let fixture: ComponentFixture<ArtMovementsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtMovementsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtMovementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
