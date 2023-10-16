import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleProgrammeComponent } from './module-programme.component';

describe('ModuleProgrammeComponent', () => {
  let component: ModuleProgrammeComponent;
  let fixture: ComponentFixture<ModuleProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
