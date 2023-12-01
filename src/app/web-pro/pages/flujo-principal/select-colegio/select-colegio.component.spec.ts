import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectColegioComponent } from './select-colegio.component';

describe('SelectColegioComponent', () => {
  let component: SelectColegioComponent;
  let fixture: ComponentFixture<SelectColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectColegioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
