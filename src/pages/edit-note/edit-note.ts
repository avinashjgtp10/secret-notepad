import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the EditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {

  index: number;
  noteTitle: string = "";
  noteText: string = "";
  storedData:any[]=[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: NativeStorage,
    public view: ViewController) {

    this.index = navParams.get('index');
    console.log("index:" + this.index);
    storage.getItem("noteData").then(
      data  => {
                this.storedData.push(JSON.stringify(data)),
                console.log("typeof:"+typeof(data));
                console.log("Array data:"+this.storedData),
               console.log("Data in storage:"+typeof(this.storedData))
              },
      error => console.log("Error:"+error) 
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditNotePage');
  }

  dismiss() {
    this.view.dismiss();
  }


}
