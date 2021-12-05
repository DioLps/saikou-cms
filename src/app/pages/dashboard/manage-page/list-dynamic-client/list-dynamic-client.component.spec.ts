import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDynamicClientComponent } from './list-dynamic-client.component';

describe('ListDynamicClientComponent', () => {
  let component: ListDynamicClientComponent;
  let fixture: ComponentFixture<ListDynamicClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDynamicClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDynamicClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
