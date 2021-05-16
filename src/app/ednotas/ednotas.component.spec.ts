import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdnotasComponent } from './ednotas.component';

describe('EdnotasComponent', () => {
  let component: EdnotasComponent;
  let fixture: ComponentFixture<EdnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdnotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
