import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {DashboardContainerComponent} from '../dashboard-container/dashboard-container.component';
import {ShufflePipe} from '../shuffle.pipe';
import {SearchService} from '../core/services/search.service';
import {HttpModule} from '@angular/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ DashboardComponent, DashboardContainerComponent, ShufflePipe ],
      providers: [SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
