import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialListPageRoutingModule } from './tutorial-list-routing.module';

import { TutorialListPage } from './tutorial-list.page';
import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TutorialListPageRoutingModule
  ],
  declarations: [TutorialListPage]
})
export class TutorialListPageModule {}
