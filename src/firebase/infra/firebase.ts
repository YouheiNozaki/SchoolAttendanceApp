import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default class Firebase {
  private static _instance: Firebase;
  private _db: firebase.firestore.Firestore;
  private _auth: firebase.auth.Auth;

  private constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDYBCHQpTBORva2PoTRq-e9zx5AOzArzRY',
      authDomain: 'senseitime-f8747.firebaseapp.com',
      databaseURL: 'https://senseitime-f8747.firebaseio.com',
      projectId: 'senseitime-f8747',
      storageBucket: 'senseitime-f8747.appspot.com',
      messagingSenderId: '1075269388866',
      appId: '1:1075269388866:web:4fea69d8583fd2c9a5bbdb',
      measurementId: 'G-76E0XKQD47',
    });
    this._db = firebase.firestore();
    this._auth = firebase.auth();
  }

  public static get instance(): Firebase {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }

  public get db() {
    if (this._db) {
      return this._db;
    } else {
      this._db = firebase.firestore();
      return this._db;
    }
  }

  public serverTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  public get auth() {
    if (this._auth) {
      return this._auth;
    } else {
      this._auth = firebase.auth();
      return this._auth;
    }
  }
}
