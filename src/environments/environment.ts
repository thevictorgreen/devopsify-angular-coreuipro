// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCxoBV2Mmfka1C7yuBjhj94mXh0hU35tBQ",
    authDomain: "coreuiauth.firebaseapp.com",
    databaseURL: "https://coreuiauth.firebaseio.com",
    projectId: "coreuiauth",
    storageBucket: "coreuiauth.appspot.com",
    messagingSenderId: "722984180745"
  }
};
