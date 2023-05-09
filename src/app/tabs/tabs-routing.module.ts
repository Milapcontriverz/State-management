import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'spacex',
        loadChildren: () => import('../pages/spacex/spacex.module').then( m => m.SpacexPageModule)
      },
      {
        path: 'add-tutorial',
        loadChildren: () => import('../pages/add-tutorial/add-tutorial.module').then( m => m.AddTutorialPageModule)
      },
      {
        path: 'tutorial-list',
        loadChildren: () => import('../pages/tutorial-list/tutorial-list.module').then( m => m.TutorialListPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/spacex',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/spacex',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
