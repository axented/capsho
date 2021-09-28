import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import router from './router'
import store from './store';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "capsho-abdf4.firebaseapp.com",
  projectId: "capsho-abdf4",
  storageBucket: "capsho-abdf4.appspot.com",
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

export const db = firebase.initializeApp(firebaseConfig).firestore();

export const authCheck = firebase.auth().onAuthStateChanged(user => {
  if (user) {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((ref) => {
        if (ref.data()) {
          const obj = { subscription: ref.data().subscription, template: ref.data().template, toneOfVoice: ref.data().tone_of_voice, type: ref.data().type, businessName: ref.data().business_name, created_profile: ref.data().created_profile }
          store.commit('setUpdateUser', obj)
        }
        store.dispatch('fetchUser', user)
      })
  }
});

export function getUserInfo() {
  db.collection('users')
    .doc(getUser())
    .get()
    .then((ref) => {
      const obj = { toneOfVoice: ref.data().tone_of_voice, type: ref.data().type, businessName: ref.data().business_name, created_profile: ref.data().created_profile }
      store.commit('setUpdateUser', obj)
    })
}

export function signInWithGoogle() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider).then((userCredential) => {
    store.commit('setVerifyEmailError', '');
    store.commit('logIn', true)
    const id = userCredential.user.toJSON().uid
    let obj = {}
    db.collection('users').doc(id).get()
    .then((ref) => {
      if (ref.data()) {
        obj = { subscription: ref.data().subscription, template: ref.data().template, toneOfVoice: ref.data().tone_of_voice, type: ref.data().type, businessName: ref.data().business_name, created_profile: ref.data().created_profile }
        store.commit('setUpdateUser', obj)
        router.push('/dashboard')
      } else {
        router.push('/create-profile')
      }
    })
  }).catch((err) => {
    console.log(err);
    store.commit('setLoginError', err.message);
  });
}

export function registerEmail(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    store.commit('logIn', true)
    router.push('/create-profile')
  }).catch((err) => {
    console.log(err);
    alert(err.message);
  })
}

export function signInWithEmail(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    store.commit('setVerifyEmailError', '');
    store.commit('logIn', true)
    const id = userCredential.user.toJSON().uid
    let obj = {}
    db.collection('users').doc(id).get()
    .then((ref) => {
      if (ref.data()) {
        obj = { subscription: ref.data().subscription, template: ref.data().template, toneOfVoice: ref.data().tone_of_voice, type: ref.data().type, businessName: ref.data().business_name, created_profile: ref.data().created_profile }
        store.commit('setUpdateUser', obj)
        router.push('/dashboard')
      } else {
        router.push('/create-profile')
      }
    })
  }).catch((err) => {
    console.log(err);
    store.commit('setLoginError', err.message);
  })
}

export function verifyEmail() {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    store.commit('setVerifyEmailError', 'We’ve sent you a verification email with a link inside. Just click on the link and then log back in to start!');
  }).catch((err) => {
    console.log(err);
    store.commit('setVerifyEmailError', err.message);
  })
}

export function resetPassword() {
  const user = firebase.auth().currentUser

  firebase.auth().sendPasswordResetEmail(user.email).then(() => {
    console.log('Email sent!')
  }).catch((err) => {
    console.log(err)
  })
}

export function logOut() {
  firebase.auth().signOut().then(() => {
    sessionStorage.clear();
    store.commit('logOut')
    router.push('/');
  }).catch((err) => {
    console.log(err);
    alert(err.message);
  })
}

export function addUserToCollection(tone, type, business, holidays, themes, expectation) {
  let user = firebase.auth().currentUser.uid
  
  db.collection('users')
    .doc(user)
    .set({
      first_login: false,
      tone_of_voice: tone,
      type: type,
      business_name: business,
      created_profile: true,
      holidays: holidays,
      themes: themes,
      subscription: 'none',
      expectation: expectation,
      template: 1
    })
    .then(() => {
      const obj = { 
        toneOfVoice: tone,
        type: type,
        businessName: business,
        created_profile: true,
        template: 1,
        subscription: 'none'
      }
      store.commit('setUpdateUser', obj)
      router.push('/dashboard')
    })

  db.collection('users_data')
    .doc(user)
    .set({
      captions: [],
      emails: [],
      email_subject_lines: [],
      sets: []
    })
}

export function saveAnswersSet(answerSets, questions, tool) {
  let user = firebase.auth().currentUser
  let newId = null

  return db.collection('users_data')
    .doc(user.uid)
    .get()
    .then((doc) => {
      let pos = doc.data().sets.length
      newId = user.uid + tool + pos

      return newId
    })
    .then(() => {
      db.collection('sets')
        .doc(newId)
        .set({
          answers: answerSets,
          questions: questions
        })

      return newId
    })
    .then(() => {
      let date = new Date()
      db.collection('users_data')
        .doc(user.uid)
        .update({
          sets: firebase.firestore.FieldValue.arrayUnion({
            name: newId,
            enabled: true,
            tool: tool,
            createdAt: date
          })
        })

      return newId
    })
}

export function updateAnswerSets(sets) {
  db.collection('users_data')
    .doc(getUser())
    .update({
      sets: sets
    })
}

export function saveCaption(text, tool, set, type) {
  let obj = {}
  let captionType
  if (!type) {
    captionType = ''
  } else {
    captionType = type
  }
  const id = getUser()
  db.collection('users_data')
    .doc(id)
    .get()
    .then((doc) => {
      obj = {
        text: text,
        tool: tool,
        order: doc.data().captions.length + 1,
        set: set,
        type: captionType
      }
    })
    .then(() => {
      db.collection('users_data')
        .doc(id)
        .update({
          captions: firebase.firestore.FieldValue.arrayUnion(obj)
        })
    })
}

export function saveEmail(text, tool, set) {
  let user = firebase.auth().currentUser
  let obj = {}

  db.collection('users_data')
    .doc(user.uid)
    .get()
    .then((doc) => {
      obj = {
        text: text,
        tool: tool,
        order: doc.data().captions.length + 1,
        set: set
      }
    })
    .then(() => {
      db.collection('users_data')
        .doc(user.uid)
        .update({
          emails: firebase.firestore.FieldValue.arrayUnion(obj)
        })
    })
}

export function saveSubjectLine(text, tool, set) {
  let user = firebase.auth().currentUser
  let obj = {}

  db.collection('users_data')
    .doc(user.uid)
    .get()
    .then((doc) => {
      obj = {
        text: text,
        tool: tool,
        order: doc.data().captions.length + 1,
        set: set
      }
    })
    .then(() => {
      db.collection('users_data')
        .doc(user.uid)
        .update({
          email_subject_lines: firebase.firestore.FieldValue.arrayUnion(obj)
        })
    })
}

export function getUser() {
  return firebase.auth().currentUser.uid
}

export function updateUserInfo(newName, newPhoto) {
  const user = firebase.auth().currentUser
  if (newName === null) {
    newName = user.displayName
  }
  user.updateProfile({
    displayName: newName,
    photoURL: newPhoto
  })
  .then(() => {
    store.dispatch('fetchUser', user)
  })
}

export function updateUserProfile(newData) {
  const user = firebase.auth().currentUser

  db.collection('users')
    .doc(user.uid)
    .update({
      business_name: newData.businessName,
      tone_of_voice: newData.toneOfVoice
    })
    .then(() => {
      const type = store.getters.type
      let obj = {
        toneOfVoice: newData.toneOfVoice,
        type: type,
        businessName: newData.businessName,
        created_profile: true
      }
      store.commit('setUpdateUser', obj)
      updateUserInfo(newData.data.displayName)
    })
}

export function saveImage(imgData) {
  const storageRef = firebase.storage().ref()
  const user = firebase.auth().currentUser
  let uploadValue = 0

  const uploadImgRef = storageRef.child('logotypes/' + user.uid).put(imgData)

  uploadImgRef.on('state_changed',
    (snapshot) => {
      uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + uploadValue + '% done')
    },
    (err) => {
      console.log(err)
    },
    () => {
      uploadImgRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL)
        user.updateProfile({ photoURL: downloadURL })
        if (store.getters.userData) {
          store.commit('changeUserPhoto', downloadURL)
        }
      })
    }
  )
}
