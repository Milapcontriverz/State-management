import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GET_SPACEX_DATA } from '../../services/ngxs/action';
import { SpaceXInfoState } from '../../services/ngxs/state';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.page.html',
  styleUrls: ['./spacex.page.scss'],
})
export class SpacexPage {
  cto_propulsion: any;
  founded: any;
  getSpacexData: any;

  constructor(private store: Store) {}

  ionViewWillEnter(): void {
    this.store.dispatch(new GET_SPACEX_DATA()).subscribe((_) => {
      this.getData();
    });
  }

  getData(): void {
    this.getSpacexData = this.store.selectSnapshot(
      (state) => state.SpaceXInfoState.info
    );
    // this.cto_propulsion = this.store.selectSnapshot(
    //   (state) => state.SpaceXInfoState.info.cto_propulsion
    // );
    // this.founded = this.store.selectSnapshot(
    //   (state) => state.SpaceXInfoState.info.founded
    // );
    console.log('this.getSpacexData', this.getSpacexData);
  }

}
