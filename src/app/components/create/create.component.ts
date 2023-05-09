import { Component, OnInit } from '@angular/core';
import { AddTutorial } from '../../actions/tutorial.actions'
import { Store } from '@ngxs/store';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent  implements OnInit {
  name: any;
  url: any;
  description: any;
  constructor(private store: Store, public toastCtrl : ToastController, public navCtrl: NavController) { }

  ngOnInit() {}
  addTutorial(name: any, url: any, description: any) {
    this.store.dispatch(new AddTutorial({name: name, url: url, description: description})).subscribe(async (data)=>{
      const toast = await this.toastCtrl.create({
        message: 'Tutorial added successfully',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();
      this.navCtrl.navigateRoot('tabs/tutorial-list')
    })
  }
}
