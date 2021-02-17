// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'Cc604284bce32ecb12183caada32fed778e3819abb7411bacb8199d23b90567f1',
  client_secret: 'bb23d71833d5fa8746bdc17934a7125291432b2099572391b75f635687f1bfc4',
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
