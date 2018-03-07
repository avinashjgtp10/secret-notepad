import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NoteModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note-model[autoresize]',
  templateUrl: 'note-model.html',
})
export class NoteModelPage {

  title: string = '';
  text: string = '';

  constructor(public navCtrl: NavController,
    public view: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteModelPage');
  }

  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = 'auto';
    console.log(this.myInput['_elementRef'].nativeElement.style.height);
  }

  dismiss() {
    this.view.dismiss();
  }

  saveNote() {
    if (this.title == '' && this.text == "") {
      alert("Empty note can not insert")
    }
    else {
      const data = {
        noteTitle: this.title,
        noteText: this.text
      };
      this.view.dismiss(data);
    }

  }
}
