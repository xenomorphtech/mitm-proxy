/**
 * @file Conversion.js
 * @description Data Conversion Utils
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 * @version 1.0
 */



/**
 * Takes a ASCII string and returns a HEX string.
 * @param {String} str ASCII string
 * @return {String} HEX String
 */
const ascii_to_hex = (str) => {
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
const hex_to_ascii = (hex) => {
  hex = hex.toString();
  let i = 0, str = '', len = hex.length;
  while (i < len) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    i += 2;
  }
  return str;
};

const str_to_hex_chunks = (str) => str.match(/.{1,2}/g);

module.exports = {
  ascii_to_hex,
  hex_to_ascii,
  str_to_hex_chunks
};