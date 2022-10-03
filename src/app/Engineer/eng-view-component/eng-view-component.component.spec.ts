import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngViewComponentComponent } from './eng-view-component.component';

describe('EngViewComponentComponent', () => {
  let component: EngViewComponentComponent;
  let fixture: ComponentFixture<EngViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
