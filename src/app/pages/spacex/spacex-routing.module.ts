import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacexPage } from './spacex.page';

const routes: Routes = [
  {
    path: '',
    component: SpacexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacexPageRoutingModule {}
