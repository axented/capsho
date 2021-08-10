import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({ projectId: 'capsho-abdf4' })
  .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

db.settings({ timestampsInSnapshots: true })
