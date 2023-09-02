import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_ROUTES } from "../../utils/ApiManage";
import { UsersListStyled } from "../../styles/Users.styled";
import { AuthContext } from "../../Component/Context/Auth";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { _id } = currentUser;

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(API_ROUTES.getAllUsers);

      if (response?.status === 200) {
        setUsers(JSON.parse(JSON.stringify(response?.data.allUsers)));
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <UsersListStyled>
        {users?.map((u) => {
          return (
            <li key={u._id.toString()}>
              {u.name} {_id.toString() === u._id.toString() && "(You)"}
            </li>
          );
        })}
      </UsersListStyled>
    </>
  );
}
