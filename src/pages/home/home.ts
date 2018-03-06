import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noteTitle: string;
  notes: any[] =
  [
    {
      noteTitle: "My first note",
      noteText: "this is note text"
    },
    {
      noteTitle: "My first note1",
      noteText: "this is note text1"
    },
    {
      noteTitle: "My first note",
      noteText: "this is note text"
    },
    {
      noteTitle: "My first note1",
      noteText: "this is note text1"
    },
    {
      noteTitle: "My first note1",
      noteText: "this is note text1"
    },
    {
      noteTitle: "My first note",
      noteText: "this is note text"
    },
    {
      noteTitle: "My first note1",
      noteText: "this is note text1"
    }
  ]

  constructor(public navCtrl: NavController,
              private model:ModalController) {
    console.log(this.notes[0].noteTitle);
  }

  newNote(){
   let noteModel= this.model.create("NoteModelPage");
    noteModel.present();
  }
}
