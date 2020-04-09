/**
 * @file index.js
 * @description Configuration for App
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 * @version 1.0
 */


const DEVELOPMENT   = "development";
const LOCALHOST     = "localhost";
const STAGING       = "staging";
const PRODUCTION    = "production";

const Environments = {
  [LOCALHOST]   : LOCALHOST,
  [DEVELOPMENT] : DEVELOPMENT,
  [STAGING]     : STAGING,
  [PRODUCTION]  : PRODUCTION
};

const BASE_URL = {
  [LOCALHOST]   : "http://localhost:8080",
  [DEVELOPMENT] : "https://dev-netmarble.herokuapp.com",
  [STAGING]     : "https://stage-netmarble.herokuapp.com",
  [PRODUCTION]  : "https://netmarble.herokuapp.com"
};

export const HOST = BASE_URL[process.env.REACT_APP_CURRENT_ENV || Environments[LOCALHOST]];

// export const API = "/network_api";
export const API = "/api";
export const ORIGIN = "WEB";

export const SERVICES = {
  AUTH: "/auth",
  DELTA: ""
};

export const BACKEND_ENDPOINTS = {
  SIGN_IN: "/sign-in",
  SIGN_OUT: "/sign-up",
  DELTA: ""
};

export const DEFAULTS = {
  localhost: {}
};