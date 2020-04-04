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
  [DEVELOPMENT] : "https://dev-network-client.herokuapp.com",
  [STAGING]     : "https://stage-network-client.herokuapp.com",
  [PRODUCTION]  : "https://network-client.herokuapp.com"
};

export const HOST = BASE_URL[process.env.REACT_APP_CURRENT_ENV || Environments[DEVELOPMENT]];

export const API = "/network_api";
export const ORIGIN = "WEB";

export const SERVICE = "";

export const BACKEND_ENDPOINTS = {

};

export const DEFAULTS = {
  localhost: {

  }
};