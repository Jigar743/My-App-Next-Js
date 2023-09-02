import { useRef, useState } from "react";
import {
  LoginContainer,
  Form,
  Fieldset,
  Button,
  Label,
  Input,
  FormField,
  Image,
} from "../styles/FormStyling.styled";
import axios from "axios";
import { API_ROUTES } from "../utils/ApiManage";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { cookiesMethods, localStorageMethods } from "../utils/helper";

export default function loginPage() {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { email, password } = inputFields;
      const response = await axios.post(API_ROUTES.loginUser, {
        email,
        password,
      });

      if (response.status === 200) {
        setInputFields({
          email: "",
          password: "",
        });
        localStorageMethods.setItem("token", response.data.token);
        cookiesMethods.set("token", response.data.token);
        router.replace("/");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <LoginContainer>
      <Form method="POST" onSubmit={handleSubmit}>
        <Fieldset>
          <FormField>
            <Label htmlFor="emailId">Email: </Label>
            <Input
              id="emailId"
              type="email"
              name="email"
              placeholder="Enter email"
              value={inputFields.email}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, email: e.target.value }))
              }
            />
          </FormField>
          <FormField topMargin>
            <Label htmlFor="passwordId">Password: </Label>
            <Input
              id="passwordId"
              type="password"
              name="password"
              placeholder="Enter password"
              value={inputFields.password}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, password: e.target.value }))
              }
            />
          </FormField>
          <Button type="submit">Login</Button>
        </Fieldset>
      </Form>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          Don't have Account? <Link href={"/signup"}>Create New Account</Link>
        </span>
        <span>
          <Link href={"/forget-password"}>Forget Password?</Link>
        </span>
      </p>
    </LoginContainer>
  );
}
