import firebase from 'firebase/app'
import 'firebase/auth'
import router from './router'

export function signInWithGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider).then(() => {
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
  });
}

export function signInWithFacebook() {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(facebookProvider).then((res) => {
    console.log(res.user);
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
  })
}

export function registerEmail(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
    console.log(res.user);
  }).catch((err) => {
    console.log(err);
  })
  router.push('/post-sign-in');
}

export function signInWithEmail(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
    console.log(res.user);
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
  })
}

export function logOut() {
  firebase.auth().signOut().then(() => {
    console.log('Signed Out');
    router.push('/sign-in');
  });
}