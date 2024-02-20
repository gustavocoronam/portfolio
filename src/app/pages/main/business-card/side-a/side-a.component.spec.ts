import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAComponent } from './side-a.component';

describe('SideAComponent', () => {
  let component: SideAComponent;
  let fixture: ComponentFixture<SideAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
