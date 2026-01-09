import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/client/context/Auth/Auth";
import { API_ROUTES } from "@/utils/ApiManage";
import {
  UsersListStyled,
  UsersWrapper,
  UsersTitle,
  UserItem,
  Avatar,
  UserName,
  YouBadge,
} from "@/client/styles/Users.styled";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { _id } = currentUser;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(API_ROUTES.getAllUsers);
      if (response?.status === 200) {
        setUsers(response?.data?.allUsers || []);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UsersWrapper>
      <UsersTitle>All Users</UsersTitle>

      <UsersListStyled>
        {users.map((u) => {
          const isYou = _id.toString() === u._id.toString();
          return (
            <UserItem key={u._id} isYou={isYou}>
              <Avatar>{u.name.charAt(0)}</Avatar>
              <UserName>
                {u.name}
                {isYou && <YouBadge>You</YouBadge>}
              </UserName>
            </UserItem>
          );
        })}
      </UsersListStyled>
    </UsersWrapper>
  );
}
