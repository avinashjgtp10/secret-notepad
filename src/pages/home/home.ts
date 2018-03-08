import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noteTitle: string;
  notes: any[] = [];

  constructor(public navCtrl: NavController,
    private model: ModalController,
    private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem("noteData").then(
      data => { console.log(data); this.notes = data },
      error => console.error(error)
    );
    console.log(this.notes.reverse());
  }

  editNote(i) {
    console.log("index:" + i);
  }
  
  newNote() {
    let noteModel: Modal = this.model.create("NoteModelPage");
    noteModel.present();

    noteModel.onDidDismiss((data) => {
      this.notes.push(data);

      this.nativeStorage.setItem("noteData", this.notes).then(
        data => console.log("Note stored!" + data),
        error => console.error("Error storing note", error)
      );
    });
  }
}
