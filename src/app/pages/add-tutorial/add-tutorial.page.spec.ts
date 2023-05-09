import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTutorialPage } from './add-tutorial.page';

describe('AddTutorialPage', () => {
  let component: AddTutorialPage;
  let fixture: ComponentFixture<AddTutorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
