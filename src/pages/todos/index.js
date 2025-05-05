import { AuthContext } from "@/client/context/Auth/Auth";
import { API_ROUTES } from "@/utils/ApiManage";
import { message } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { _id } = currentUser;

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_ROUTES.getTodosByUser, {
          params: {
            id: _id,
          },
        });
        if (response.status === 200) {
          setTodos(response.data?.Todos);
          console.log({ response });
          // message.success("Todos fetched successfully", 5);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    // e.preventDefault();

    // const Todo = {
    //   title: "I have to buy a milk.",
    //   description: "any thing you want to add, beacause this is description!",
    //   status: "pending",
    //   priority: "low",
    //   dueDate: new Date("20 march 2024").toISOString(),
    // };

    try {
      const response = await axios.post(API_ROUTES.createTodos, {
        // ...Todo,
      });

      if (response.status === 201) {
        console.log("success");
        console.log({ response });
        message.success("Todo added successfully", 5);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <span>Todo Create space</span>
        <button onClick={handleSubmit}>Add</button>
      </div>
      {loading && <div>Loading...</div>}
      {!loading && todos?.length > 0 ? (
        todos?.map((todo) => {
          return (
            <div key={todo._id}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <p>{todo.status}</p>
              <p>{todo.priority}</p>
              <p>{todo.dueDate}</p>
              <p>{todo.completionDate || "-"}</p>
            </div>
          );
        })
      ) : (
        <div>No todos found, please create first!</div>
      )}
    </div>
  );
}
