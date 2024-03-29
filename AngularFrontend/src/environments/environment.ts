// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
//   API to access backend Spring Boot application
      // API : '<external-ip-of-SbService>:<port>/api/v1/',
      AUTH_API : 'http://localhost:8081/api/v1/user',
      AUTH_LOGIN_API : 'http://localhost:8081/api/v1/login',
      API_PROFILE : 'http://localhost:8082/api/v1/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
