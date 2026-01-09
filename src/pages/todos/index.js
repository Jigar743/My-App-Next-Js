import { AuthContext } from "@/client/context/Auth/Auth";
import { API_ROUTES } from "@/utils/ApiManage";
import { message } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  TodoPageWrapper,
  TodoHeader,
  TodoTitle,
  AddButton,
  LoadingText,
  TodoList,
  TodoCard,
  TodoText,
  EmptyState,
} from "../../client/styles/Todos.styled";

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
          params: { id: _id },
        });
        if (response.status === 200) {
          setTodos(response.data?.Todos);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(API_ROUTES.createTodos, {
        // ...Todo,
      });

      if (response.status === 201) {
        message.success("Todo added successfully", 5);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TodoPageWrapper>
      <TodoHeader>
        <TodoTitle>Todo Create space</TodoTitle>
        <AddButton onClick={handleSubmit}>Add</AddButton>
      </TodoHeader>

      {loading && <LoadingText>Loading...</LoadingText>}

      {!loading && todos?.length > 0 ? (
        <TodoList>
          {todos.map((todo) => (
            <TodoCard key={todo._id}>
              <TodoText>
                <span>Title:</span> {todo.title}
              </TodoText>
              <TodoText>
                <span>Description:</span> {todo.description}
              </TodoText>
              <TodoText>
                <span>Status:</span> {todo.status}
              </TodoText>
              <TodoText>
                <span>Priority:</span> {todo.priority}
              </TodoText>
              <TodoText>
                <span>Due Date:</span> {todo.dueDate}
              </TodoText>
              <TodoText>
                <span>Completed:</span> {todo.completionDate || "-"}
              </TodoText>
            </TodoCard>
          ))}
        </TodoList>
      ) : (
        !loading && (
          <EmptyState>No todos found, please create first!</EmptyState>
        )
      )}
    </TodoPageWrapper>
  );
}
