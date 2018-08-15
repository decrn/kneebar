import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTilesComponent } from './discover-tiles.component';

describe('DiscoverTilesComponent', () => {
  let component: DiscoverTilesComponent;
  let fixture: ComponentFixture<DiscoverTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
