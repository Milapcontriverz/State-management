import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { GET_SPACEX_DATA } from './action';
import { NetworkService } from './network.service';

interface SpaceXInfo {
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  launch_sites: number;
  test_sites: number;
  ceo: string;
  cto: string;
  coo: string;
  cto_propulsion: string;
  valuation: number;
  headquarters: {
    address: string;
    city: string;
    state: string;
  };
  summary: string;
}

interface SpaceXModel {
  info: SpaceXInfo;
}

@State<SpaceXModel>({
  name: 'SpaceXInfoState',
})
@Injectable()
export class SpaceXInfoState {
  constructor(private network: NetworkService) {}

  @Selector()
  public static ceo(state: SpaceXModel) {
    return state.info.ceo;
  }
  
   @Action(GET_SPACEX_DATA)
  public getSpaceXData({ patchState, getState }: StateContext<SpaceXModel>) {
    return this.network.getSpaceXData().pipe(
      map((res: any) => {
        patchState({
          info: res,
        });
      })
    );
  }

  
}