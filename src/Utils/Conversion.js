/**
 * @file Conversion.js
 * @description Data Conversion Utils
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 * @version 1.0
 */


import _ from "lodash";

/**
 * Takes a ASCII string and returns a HEX string.
 * @param {String} str ASCII string
 * @return {String} HEX String
 */
export const asciiToHex = (str) => {
  const arr = [];
  let i = 0, len = str.length;
  while (i < len) {
    arr.push(Number(str.charCodeAt(i)).toString(16));
    i++;
  }
  return arr.join('');
};



/**
 * Takes a HEX string and returns a ASCII string.
 * @param {String} str HEX string
 * @return {String} ASCII String
 */
export const hexToAscii = (hex) => {
  hex = hex.toString();
  let i = 0, str = '', len = hex.length;
  while (i < len) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    i += 2;
  }
  return str;
};

export const strToHexChunks = (str) => str.match(/.{1,2}/g);


/**
 * Takes a HEX string and returns equivalent Integer.
 * @param {String} str HEX string
 * @return {Int} Integer
 */
export const hexToDecimal = (str) => parseInt(str, 16);



/**
 * Takes an Integer and returns equivalent HEX string.
 * @param {Int} num Integer
 * @return {String} Hex string
 */
export const decimalToHex = (num) => Number(num).toString(16);



/**
 * Takes a HEX string and returns equivalent Binary string.
 * @param {String} str HEX string
 * @return {Int} Binary string
 */
export const hexToBinary = (str) => parseInt(str, 16).toString(2);



/**
 * Takes an Integer and returns equivalent HEX string.
 * @param {Int} num Binary string
 * @return {String} Hex string
 */
export const binaryToHex = (num) => parseInt(num,2).toString(16);


export const binArrToBinStr = (arr) => arr.map(v => v ? 1 : 0).join("");

export const binStrToBinArr = (str) => str.split("").map(v => v === "1" ? 1 : 0);

export const makeNiceBinStr = (str) => "0".repeat(8 - str.length) + str;

export const makeNiceHexStr = (str) => str.length === 1 ? "0"+str : str;

export const hexToBinArr = (h) => _.flow([hexToBinary, makeNiceBinStr, binStrToBinArr])(h);

export const binArrToHex = (arr) => _.flow([binArrToBinStr, binaryToHex, makeNiceHexStr])(arr).toUpperCase();

export const replaceNonAscii = (str) => str.replace(/[^\x00-\x7F]/g, ".");

export default {
  asciiToHex,
  hexToAscii,
  strToHexChunks,
  hexToDecimal,
  decimalToHex,
  hexToBinary,
  binaryToHex,
  binArrToBinStr,
  binStrToBinArr,
  makeNiceBinStr,
  makeNiceHexStr,
  hexToBinArr,
  binArrToHex,
  replaceNonAscii
}