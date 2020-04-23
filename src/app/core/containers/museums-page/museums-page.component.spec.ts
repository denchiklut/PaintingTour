import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumsPageComponent } from './museums-page.component';

describe('MuseumsPageComponent', () => {
  let component: MuseumsPageComponent;
  let fixture: ComponentFixture<MuseumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
