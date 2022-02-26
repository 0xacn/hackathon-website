import { getAuth, getRedirectResult, GithubAuthProvider, signInWithPopup } from "firebase/auth";

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
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = credential.accessToken;
      // ...
    }

    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GithubAuthProvider.credentialFromError(error);

    signOut(auth).then(() => {
      }).catch((error) => {
          console.log('an error occured. Try again.')
      });
  });
  });