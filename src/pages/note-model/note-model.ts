import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NoteModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-model',
  templateUrl: 'note-model.html',
})
export class NoteModelPage {

  constructor(public navCtrl: NavController,
              public view:ViewController,
               public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteModelPage');
  }

  dismiss(){
    this.view.dismiss();
  }

}
