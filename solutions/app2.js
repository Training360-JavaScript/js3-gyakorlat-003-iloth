import setCookie from './app1.js';

const cookieHandler = {
  getAll() {
    const cookies = document.cookie.split(';');
    const ret = {};
    cookies.forEach((item) => {
      const pair = item.split('=');
      const key = pair[0].trim();
      const value = pair[1].trim();

      ret[key] = value;
    });

    return ret;
  },
  flush() {
    for (let prop in this.getAll()) {
      setCookie(prop, '', -1);
    }
  },
  toSessionStorage() {
    const cookies = this.getAll();
    for (let prop in cookies) {
      sessionStorage.setItem(prop, cookies[prop]);
    }
  },
};

//setCookie('viewed', '5');
//setCookie('uid', '354774631237');
//setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

export {
  cookieHandler
};