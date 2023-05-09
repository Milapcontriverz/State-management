
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Tutorial } from '../../models/tutorial.model'
import { Observable } from 'rxjs'
import { RemoveTutorial } from '../../actions/tutorial.actions'
import { ModalController } from '@ionic/angular';
import { EditTutorialComponent } from '../edit-tutorial/edit-tutorial.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})

export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial>
  tutorialData: any = [];
  constructor(private store: Store, public modalCtrl: ModalController) {
      this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
      console.log(this.tutorials$);
      this.tutorialData = this.tutorials$;
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }

  async editTutorial(data){
    // data.index = index;
    const modal = await this.modalCtrl.create({
      component: EditTutorialComponent,
      componentProps: data
    });
    return await modal.present();
  }

  ngOnInit() {}

}