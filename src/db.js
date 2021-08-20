import firebase from 'firebase/app'
import 'firebase/auth'
import router from './router'
import store from './store';

export function signInWithGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider).then(() => {
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
    store.commit('setLoginError', err.message);
  });
}

export function signInWithFacebook() {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(facebookProvider).then((res) => {
    console.log(res.user);
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
    store.commit('setLoginError', err.message);
  })
}

export function registerEmail(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
    console.log(res.user);
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
    alert(err.message);
  })
}

export function signInWithEmail(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
    console.log(res.user);
    router.push('/post-sign-in');
  }).catch((err) => {
    console.log(err);
    store.commit('setLoginError', err.message);
  })
}

export function verifyEmail() {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    store.commit('setVerifyEmailError', 'Email Sent, please log in again.');
  }).catch((err) => {
    console.log(err);
    store.commit('setVerifyEmailError', err.message);
  })
}

export function logOut() {
  firebase.auth().signOut().then(() => {
    console.log('Signed Out');
    router.push('/sign-in');
  }).catch((err) => {
    console.log(err);
    alert(err.message);
  })
}