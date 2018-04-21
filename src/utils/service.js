
import countries from '../countries.js';
const header = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}


export const getReq = (url = '') => {
  return new Promise((resolve, reject) => {
    return resolve(countries);
  });
}
