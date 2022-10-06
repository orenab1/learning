import { Component } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'

import { Observable } from 'rxjs'
import { QuestionTopic } from './_models/questionTopic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ask-question'
  body='';

  items: Observable<any[]>
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('doh').valueChanges()
  }

  onSelectedChannelChanged(selectedChannel:QuestionTopic){
    alert(selectedChannel.channelUrl+' '+selectedChannel.topicName)
  }

  onSubmit(){
    let uuid=this.getUUID();
 this.firestore
      .collection('doh')
      .doc(uuid)
      .set({
        body: this.body,
        uuid: uuid,
        country: 'USA',
      })
      .then(() => {
        console.log('Document successfully written!')
      })








    this.firestore
    .collection('doh')
    .doc(this.getUUID())
    .set({
      name: this.body,
      state: 'CA',
      country: 'USA',
    })
    .then(() => {
      console.log('Document successfully written!')
    })
  }

  getUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
