import Cookies from "js-cookie";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const convertDateIntoTwoDigit = (nu) => {
  if (nu < 9 && nu >= 1) {
    return ("0" + nu).slice(-2);
  }
  return nu;
};

export const getTime = (date) => {
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    miniutes = date.getMinutes();

  const isAM = date.getHours() > 12 ? "PM" : "AM";

  return hours + ":" + miniutes + " " + isAM;
};

// Formating Date like : 01 Jan 2023
export const formatDate = (dateObj) => {
  const date = new Date(dateObj);

  const format =
    convertDateIntoTwoDigit(date.getDate()) +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    " At " +
    getTime(date);
  return format;
};

export const localStorageMethods = {
  setItem: (key, val) => localStorage.setItem(key, val),
  getItem: (key) => localStorage.getItem(key),
  deleteItem: (key) => localStorage.removeItem(key),
  deleteAllItem: () => localStorage.clear(),
};

export const cookiesMethods = {
  set: (key, val) => Cookies.set(key, val),
  get: (key) => Cookies.get(key),
  delete: (key) => Cookies.remove(key),
};

export const sidebarList = [
  {
    title: "Users",
    redirection: "/users",
  },
  {
    title: "Todos",
    redirection: "/todos",
  },
  // {
  //   title: "Money spend spliter",
  //   redirection: "/money-spliter",
  // },
  {
    title: "File Upload",
    redirection: "/file-upload"
  }
];

export const publicRoute = [
  "/login",
  "/signup",
  "/otp-verification",
  "/forget-password",
];
