const dev = process.env.NODE_ENV !== "production";

// for calling api in client side
const clientURL = "/api";

// for server side api call
export const serverURL = dev
  ? process.env.DEVELOPMENT_BASE_URL
  : process.env.PRODUCTION_BASE_URL;

export const API_ROUTES = {
  signupUser: `${clientURL}/auth/signup`,
  loginUser: `${clientURL}/auth/signin`,
  getAllUsers: `${clientURL}/users`,
  getCurrentUser: `${clientURL}/users/me`,
  updateUsers: (id) => `${clientURL}/users/${id}`,
  fileUpload: `${clientURL}/media`,
};

// axios.interceptors.request.use(
//   async (config) => {
//     const token = cookiesMethods.get("token");
//     if (token) {
//       config.headers.Authorization = `${token}`;
//     }

//     return config;
//   },
//   (err) => Promise.reject(err)
// );

// axios.interceptors.response.use(undefined, (error) => {
//   const { status } = error?.response;
//   if (status === 403) {
//     // logout();
//     Router.replace("/login");
//     return Promise.reject(err);
//   }
//   return Promise.reject(err);
// });
