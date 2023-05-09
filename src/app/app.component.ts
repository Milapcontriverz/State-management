import { Component, ApplicationRef } from '@angular/core';
import { Store } from "@ngxs/store";
import { first } from "rxjs/operators";
// import { Menus } from "./core/state";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store, private appRef: ApplicationRef) {
    // this.appRef.isStable.pipe(first((stable) => stable)).subscribe(() => {
    //   this.store.dispatch(new Menus.AppLoaded());
    // });
  }
}
