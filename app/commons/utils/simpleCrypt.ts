import { shadeSimple } from './string';

const b64Table =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const CRYPT_KEY = `ggf${((s) => s)(shadeSimple[3])}$Kjg${((s) => s)(
  shadeSimple[1],
)}${((s) => s)(shadeSimple[4])}cmm${((s) => s)(shadeSimple[0])}${((s) => s)(
  shadeSimple[2],
)}`;

const xorEncrypt = (key: string, data: string) => {
  const result = [];

  for (let i = 0; i < data.length; i += 1) {
    result.push(
      data.charAt(i).charCodeAt(0) ^ key.charCodeAt(Math.floor(i % key.length)), // eslint-disable-line no-bitwise
    );
  }

  return result;
};

const xorDecrypt = (key: string, data: number[]) => {
  let result = '';

  for (let i = 0; i < data.length; i += 1) {
    result += String.fromCharCode(
      data[i] ^ key.charCodeAt(Math.floor(i % key.length)), // eslint-disable-line no-bitwise
    );
  }

  return result;
};

const b64Encode = (data: any) => {
  let o1;
  let o2;
  let o3;
  let h1;
  let h2;
  let h3;
  let h4;
  let bits;
  let i = 0;
  let enc = '';

  do {
    o1 = data[i++]; // eslint-disable-line no-plusplus
    o2 = data[i++]; // eslint-disable-line no-plusplus
    o3 = data[i++]; // eslint-disable-line no-plusplus

    bits = (o1 << 16) | (o2 << 8) | o3; // eslint-disable-line no-bitwise

    h1 = (bits >> 18) & 0x3f; // eslint-disable-line no-bitwise
    h2 = (bits >> 12) & 0x3f; // eslint-disable-line no-bitwise
    h3 = (bits >> 6) & 0x3f; // eslint-disable-line no-bitwise
    h4 = bits & 0x3f; // eslint-disable-line no-bitwise

    enc +=
      b64Table.charAt(h1) +
      b64Table.charAt(h2) +
      b64Table.charAt(h3) +
      b64Table.charAt(h4);
  } while (i < data.length);

  const r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};

const b64Decode = (data: any) => {
  let o1;
  let o2;
  let o3;
  let h1;
  let h2;
  let h3;
  let h4;
  let bits;
  let i = 0;
  const result = [];

  do {
    h1 = b64Table.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    h2 = b64Table.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    h3 = b64Table.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    h4 = b64Table.indexOf(data.charAt(i++)); // eslint-disable-line no-plusplus
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4; // eslint-disable-line no-bitwise
    o1 = (bits >> 16) & 0xff; // eslint-disable-line no-bitwise
    o2 = (bits >> 8) & 0xff; // eslint-disable-line no-bitwise
    o3 = bits & 0xff; // eslint-disable-line no-bitwise
    result.push(o1);

    if (h3 !== 64) {
      result.push(o2);
      if (h4 !== 64) {
        result.push(o3);
      }
    }
  } while (i < data.length);

  return result;
};

export const encrypt = (key = '', data = '') => {
  let result = '';

  try {
    result = encodeURIComponent(
      b64Encode(xorEncrypt(`${CRYPT_KEY}${key}`, encodeURIComponent(data))),
    );
  } catch {}

  return result;
};

export const decrypt = (key = '', data = '') => {
  let result = '';

  try {
    result = decodeURIComponent(
      xorDecrypt(`${CRYPT_KEY}${key}`, b64Decode(decodeURIComponent(data))),
    );
  } catch {}

  return result;
};
