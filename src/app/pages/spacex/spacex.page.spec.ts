import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpacexPage } from './spacex.page';

describe('SpacexPage', () => {
  let component: SpacexPage;
  let fixture: ComponentFixture<SpacexPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpacexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
