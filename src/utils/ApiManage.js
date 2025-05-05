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

  // for todos
  createTodos: `${clientURL}/todos/create-todo`,
  getTodosByUser: `${clientURL}/todos/get-todo-by-user`,
  getTodoByStatus: `${clientURL}/todos/get-todo-by-status`,
  getTodoByPriority: `${clientURL}/todos/get-todo-by-priority`,
  getTodoById: (id) => `${clientURL}/todos/${id}`,
};
