// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'Cc604284bce32ecb12183caada32fed778e3819abb7411bacb8199d23b90567f1',
  client_secret: 'be47f4ce07699a2a3d4d350e8ed5f079e689622b39890c9c9bf064d7f309e4df',
  redirect_uri: 'http://localhost:4200/rooms',
  scope: 'spark:all spark:kms'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
