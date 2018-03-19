import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IFreelancer, ACTIONS } from './freelancer-reducer';
import * as Rx from 'RxJS';

@Component({
  selector: 'app-freelancer-grid',
  templateUrl: './freelancer-grid.component.html',
  styleUrls: ['./freelancer-grid.component.scss'],
})
export class FreelancerGridComponent implements OnInit {
  public freelancers: Rx.Observable<Array<IFreelancer>>;

  constructor(private store: Store<AppState>) {
    this.freelancers = store.select('freelancers');
  }

}