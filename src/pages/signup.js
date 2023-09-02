import { useRef, useState } from "react";
import {
  Button,
  Fieldset,
  Form,
  FormField,
  Input,
  Label,
  LoginContainer,
} from "../styles/FormStyling.styled";
import axios from "axios";
import { API_ROUTES } from "../utils/ApiManage";
import Link from "next/link";
import { useRouter } from "next/router";
import { cookiesMethods, localStorageMethods } from "../utils/helper";

export default function signupPage() {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { name, email, password } = inputFields;
    try {
      const response = await axios.post(API_ROUTES.signupUser, {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        setInputFields({
          name: "",
          email: "",
          password: "",
        });
        localStorageMethods.setItem("token", response.data.token);
        cookiesMethods.set("token", response.data.token);
        router.replace("/");
      }
    } catch (error) {
      console.log({ signupErr: error });
    }
  };

  return (
    <LoginContainer>
      <Form method="POST" onSubmit={handleSubmit}>
        <Fieldset signupForm>
          <FormField>
            <Label htmlFor="nameId">Name: </Label>
            <Input
              id="nameId"
              type="text"
              name="userName"
              placeholder="Enter name"
              required
              value={inputFields.name}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, name: e.target.value }))
              }
            />
          </FormField>
          <FormField topMargin>
            <Label htmlFor="emailId">Email: </Label>
            <Input
              id="emailId"
              type="email"
              name="userEmail"
              placeholder="Enter email"
              required
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
              name="userPassword"
              placeholder="Enter password"
              required
              value={inputFields.password}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, password: e.target.value }))
              }
            />
          </FormField>
          <Button type="submit">Signup</Button>
        </Fieldset>
      </Form>
      <p>
        Already have account? <Link href={"/login"}>Signin</Link>
      </p>
    </LoginContainer>
  );
}
