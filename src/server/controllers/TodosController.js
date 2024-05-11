// const getAllTodos = async (req, res) => {};

import Todo from "../models/TodosModal";

const getTodosOfUser = async (req, res) => {};

const createTodo = async (req, res) => {
  // console.log({ req });
  // const todo = req.body;

  const newTodo = await Todo.create(req.body);

  await newTodo
    .save()
    .then((todo) => {
      console.log({ todo });
      res.status(201).json({
        message: "Todo created successsfully!",
      });
    })
    .catch((e) => {
      res.status(500).json({ message: "something goes wrong here!" + e });
    });
};

const updateTodoById = async (req, res) => {};

const deleteTodoById = async (req, res) => {};

export { getTodosOfUser, createTodo, updateTodoById, deleteTodoById };
