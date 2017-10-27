// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC0RlKVQT3qcTHzbcvVMDFUQmmuMNl31gI',
    authDomain: 'chatify-3cccd.firebaseapp.com',
    databaseURL: 'https://chatify-3cccd.firebaseio.com',
    projectId: 'chatify-3cccd',
    storageBucket: 'chatify-3cccd.appspot.com',
    messagingSenderId: '945456439234'
  }
};
