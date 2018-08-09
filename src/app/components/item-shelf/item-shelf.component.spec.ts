import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShelfComponent } from './item-shelf.component';

describe('ItemShelfComponent', () => {
  let component: ItemShelfComponent;
  let fixture: ComponentFixture<ItemShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
