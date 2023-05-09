import { Component, Input, OnInit } from '@angular/core';
import { AddTutorial, EditTutorial } from '../../actions/tutorial.actions'
import { Store } from '@ngxs/store';
import { NavController, ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrls: ['./edit-tutorial.component.scss'],
})
export class EditTutorialComponent  implements OnInit {
  name: any;
  url: any;
  description: any;
  @Input() data: any;
  constructor(private store: Store, public toastCtrl : ToastController, public navCtrl: NavController, public modalCtrl: ModalController) { }

  ngOnInit() {
    setTimeout(() => {
      console.log('data', this.data);
    }, 1000);
  }

  editTutorial(name: any, url: any, description: any){
    let updateData = {
      name: name,
      url: url,
      description: description
    }

    // this.store.dispatch(new EditTutorial(updateData, name));
    this.modalCtrl.dismiss();
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
