import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noteTxt: any[] = [];
  noteTitle: string;
  notes: any[];
  // [
  //   {
  //     noteTitle: '',
  //     noteText: 'This is my Demo note'
  //   }
  // ]

  constructor(public navCtrl: NavController,
    private model: ModalController,
    private nativeStorage: NativeStorage) {
      this.nativeStorage.getItem("noteData").then(
        data => {this.notes=data },
        error => console.error(error)
      );
  }

  newNote() {
    let noteModel: Modal = this.model.create("NoteModelPage");
    noteModel.present();

    noteModel.onDidDismiss((data) => {
      this.noteTxt.push(data);

      this.nativeStorage.setItem("noteData", this.noteTxt).then(
        () => console.log("Note stored!"),
        error => console.error("Error storing note",error)
      );

      this.nativeStorage.getItem("noteData").then(
        data => {this.notes=data },
        error => console.error(error)
      );

    });
  }
}
