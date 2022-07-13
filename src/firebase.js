import firebase from 'firebase'
import store from './redux'

const config = {
  apiKey: 'AIzaSyCRLgcTfzzO4PEquJPfRqIW7Hg0xULuZ1w',
  authDomain: 'aoe2-pet.firebaseapp.com',
  databaseURL: 'https://aoe2-pet-default-rtdb.firebaseio.com',
  projectId: 'aoe2-pet',
  storageBucket: 'aoe2-pet.appspot.com',
  messagingSenderId: '555719685423',
  appId: '1:555719685423:web:4db1bca6b9f0adf1c85dda',
}

const rrfConfig = {
  userProfile: 'users',
}
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
}

firebase.initializeApp(config)

export const database = firebase.database

export const auth = firebase.auth()

export default firebase
