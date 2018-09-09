// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:'http://localhost:4200/assets/json/marker.json',
  API_URL_OVERVIEW:'http://localhost:49677/RIDP/Overview',

  API_PROJECT:'http://localhost:49677/RIDP/Project',
  API_RIVER:'http://localhost:49677/RIDP/River',
  API_PROVINCE:'http://localhost:49677/RIDP/Province',

  ALL_LINK: 'http://localhost:49677/RIDP/LinkAll',
  ALL_OFFICE: 'http://localhost:49677/RIDP/OfficeAll',
  ALL_STATION:'http://localhost:49677/RIDP/StationAll',
  ALL_PROVINCE:'http://localhost:49677/RIDP/ProvinceAll',
  ALL_RIVER:'http://localhost:49677/RIDP/RiverAll',
  RECORD:'http://localhost:49677/RIDP/GetRecord'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
