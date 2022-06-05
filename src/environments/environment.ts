// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://localhost:5001/',
  successUrl: 'http://localhost:4200/payment/success',
  failureUrl: 'http://localhost:4200/payment/failure',
  returnUrl: "http://localhost:4200/dashboard"
};
