import Todo from "../models/Todo.js";

const getTodosByUser = async (req, res) => {
  try {
    const { id } = req.query;
    const Todos = await Todo.find({ userId: id });

    res.status(200).json({ message: "Todos fetched successfully", Todos });
  } catch (error) {
    res.status(404).json({ message: "Todos not found", error });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, userId } = req.body;

    const newTodo = await new Todo({
      title,
      description,
      status,
      priority,
      dueDate,
      userId,
    }).save();

    res
      .status(201)
      .json({ message: "Todo Created Successfully", Todo: newTodo });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error", error });
  }
};

const deleteTodoById = async (req, res) => {
  try {
    const todoId = req.query.id;
    await Todo.findByIdAndDelete({ _id: todoId });

    res.status(200).json({ message: "Todo Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: "Todo not found", error });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todoId = req.query.id;

    const fetchedTodo = await Todo.findById({ _id: todoId });

    res
      .status(200)
      .json({ message: "Todo fetched successfully", Todo: fetchedTodo });
  } catch (error) {
    res.status(404).json({ message: "Todo not found", error });
  }
};

const updateTodoById = async (req, res) => {
  try {
    const todoId = req.query.id;
    const { title, description, status, priority, dueDate, completionDate } =
      req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
      title,
      description,
      status,
      priority,
      dueDate,
      completionDate,
    });

    res
      .status(200)
      .json({ message: "Todo Updated Successfully", todo: updatedTodo });
  } catch (error) {
    res.status(404).json({ message: "Todo not found", error });
  }
};

const todosByStatus = async (req, res) => {
  try {
    const { status, userId } = req.query;

    const Todos = await Todo.find({ userId, status });

    res.status(200).json({ message: "Todos fetched successfully", Todos });
  } catch (error) {
    res.status(404).json({ message: "Todos not found", error });
  }
};

const todosByPriority = async (req, res) => {
  try {
    const { priority, userId } = req.query;
    const Todos = await Todo.find({ userId, priority });

    res.status(200).json({ message: "Todos fetched successfully", Todos });
  } catch (error) {
    res.status(404).json({ message: "Todos not found", error });
  }
};

export {
  getTodosByUser,
  createTodo,
  updateTodoById,
  deleteTodoById,
  getTodoById,
  todosByStatus,
  todosByPriority,
};
