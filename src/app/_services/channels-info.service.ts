import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { ChannelsInfo } from '../_models/channelsInfo';

@Injectable({
  providedIn: 'root'
})
export class ChannelsInfoService {


  constructor(private firestore: AngularFirestore) { 

    let userDoc = firestore.firestore.collection('channels-urls');
    userDoc.get().then((querySnapshot) => { 
      
      let k = new ChannelsInfo(querySnapshot.docs.map(k=>k.data())[0]['name'],querySnapshot.docs.map(k=>k.data())[0]['categoryName'],querySnapshot.docs.map(k=>k.data())[0]['url']);
      debugger;
      console.log('dddddddddd'+k)

      querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());  
      })
})



  //   let docRef = firestore.collection('channels-urls');    


  //   firestore.collection('channels-urls').collection('channels-urls').get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //     });
  // });

  }

  getData(){
    return 'asdf';
  }
}
