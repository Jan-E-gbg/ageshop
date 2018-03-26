import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturesComponent } from './manufactures.component';

describe('ManufacturesComponent', () => {
  let component: ManufacturesComponent;
  let fixture: ComponentFixture<ManufacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
