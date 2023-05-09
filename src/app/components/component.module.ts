import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { EditTutorialComponent } from './edit-tutorial/edit-tutorial.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateComponent,
    ReadComponent,
    EditTutorialComponent
  ],
  exports: [ 
    CreateComponent,
    ReadComponent,
    EditTutorialComponent
  ],
  schemas:[]
})
export class ComponentsModule { }
