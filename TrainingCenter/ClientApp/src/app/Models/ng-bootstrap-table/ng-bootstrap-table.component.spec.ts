import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapTableComponent } from './ng-bootstrap-table.component';

describe('NgBootstrapTableComponent', () => {
  let component: NgBootstrapTableComponent;
  let fixture: ComponentFixture<NgBootstrapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBootstrapTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgBootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
