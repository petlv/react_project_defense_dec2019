import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBBvo2Vmhm-GLCtzkhaz9vnAFhoH7GpPqk",
    authDomain: "hotelcomments-f0e49.firebaseapp.com",
    databaseURL: "https://hotelcomments-f0e49.firebaseio.com",
    projectId: "hotelcomments-f0e49",
    storageBucket: "hotelcomments-f0e49.appspot.com",
    messagingSenderId: "860779767290",
    appId: "1:860779767290:web:6513490d37802cab41b043",
    measurementId: "G-56LHL2WG61"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;

/*
import app from 'firebase/app';
const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};
const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};
const config =
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;*/