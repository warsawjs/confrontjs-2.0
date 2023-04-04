import Cookies from "js-cookie";

export const setCookie = (name: string, value: any, options = {}) => {
  Cookies.set(name, value, options);
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string, options = {}) => {
  Cookies.remove(name, options);
};
