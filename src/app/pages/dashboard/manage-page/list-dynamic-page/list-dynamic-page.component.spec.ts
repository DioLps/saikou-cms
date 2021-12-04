import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDynamicPageComponent } from './list-dynamic-page.component';

describe('ListDynamicPageComponent', () => {
  let component: ListDynamicPageComponent;
  let fixture: ComponentFixture<ListDynamicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDynamicPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDynamicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
