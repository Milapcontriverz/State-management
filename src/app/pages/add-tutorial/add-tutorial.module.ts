import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTutorialPageRoutingModule } from './add-tutorial-routing.module';

import { AddTutorialPage } from './add-tutorial.page';
import { ComponentsModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AddTutorialPageRoutingModule
  ],
  declarations: [AddTutorialPage]
})
export class AddTutorialPageModule {}
