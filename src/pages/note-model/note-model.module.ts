import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteModelPage } from './note-model';

@NgModule({
  declarations: [
    NoteModelPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteModelPage),
  ],
})
export class NoteModelPageModule {}
