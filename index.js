import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';



           
import serviceAccount from './serviceAccount.js';

initializeApp({
 credential: cert(serviceAccount)    
  }) 

const db = getFirestore();

//Add
//  db.collection('Players').add({
// Name : 'Ronaldo',
// Age: 35,
// Club : 'Manchester United'
//  })
//  .then(doc=> console.log('New playerr:; doc.id'))
//  .catch(console.error)

//Update

function getPlayers(){
    db.collection('Players')
    .doc('Jlwo64hV8XXewYSxrviL')
    .get()
    .then(()=> console.log(doc.data()))
    .catch(console.error)
}

db.collection('Players')
.doc('Jlwo64hV8XXewYSxrviL')
.update({Name: 'Neymar' })
.then(() => console.log(getPlayers()))
.catch(console.error)