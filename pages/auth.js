import { getAuth, getRedirectResult, GithubAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import toast, { Toaster } from 'react-hot-toast'

var firebaseConfig = require('../utils/firebaseConfig');

export default function Home() {
    return(
        <h1>You are getting redirected.</h1>
    )
}

const provider = new GithubAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GithubAuthProvider.credentialFromError(error);

    const auth = getAuth();
    signInWithRedirect(auth, provider);


getRedirectResult(auth)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    if (credential) {
      const token = credential.accessToken;
      console.log('you are being redirected')
    }

    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GithubAuthProvider.credentialFromError(error);

    signOut(auth).then(() => {
        toast.success('You have been looged out!')
      }).catch((error) => {
          toast.error(error.message);
      });
  });
  <Toaster position="bottom-left" />
  });