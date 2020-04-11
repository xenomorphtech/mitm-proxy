import { API, HOST, ORIGIN, SERVICES, BACKEND_ENDPOINTS } from "../Config";
import { version } from "../../package.json";

let defaultHeaders = {
  "Accept": "application/json, text/plain, */*",
  "Content-Type": "application/json",
  "X-UA-Source": ORIGIN,
  "X-UA-Version": version
};

const callAPI = (method, url, data, config = {}, headers = defaultHeaders) => {
  const options = {
    method,
    headers,
    body: JSON.stringify(data)
  };
  return fetch(HOST + API + SERVICES["DELTA"] + url, { ...options, ...config });
};

export const logInAPI = (data) => callAPI("POST", "/users", data);

export const signUpAPI = (data) => callAPI("POST", "/users", data);