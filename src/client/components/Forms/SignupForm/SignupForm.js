import React, { useState } from "react";
import { API_ROUTES } from "../../../../utils/ApiManage";
import { useRouter } from "next/router";
import {
  Button,
  Form,
  FormCard,
  FormContainer,
  FormField,
  Input,
  FormFooter,
} from "../../../styles/FormStyling.styled";
import Link from "next/link";
import axios from "axios";
import { cookiesMethods, localStorageMethods } from "../../../../utils/helper";
import { message } from "antd";

export default function SignupForm() {
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
        localStorageMethods.setItem("token", response.data.token);
        cookiesMethods.set("token", response.data.token);
        router.replace("/");
        message.success("Successfully signed up!");
      }
    } catch (error) {
      console.log({ signupErr: error });
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="nameId">Name</label>
            <Input
              id="nameId"
              type="text"
              placeholder="John Doe"
              required
              value={inputFields.name}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, name: e.target.value }))
              }
            />
          </FormField>

          <FormField>
            <label htmlFor="emailId">Email</label>
            <Input
              id="emailId"
              type="email"
              placeholder="you@example.com"
              required
              value={inputFields.email}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, email: e.target.value }))
              }
            />
          </FormField>

          <FormField>
            <label htmlFor="passwordId">Password</label>
            <Input
              id="passwordId"
              type="password"
              placeholder="••••••••"
              required
              value={inputFields.password}
              onChange={(e) =>
                setInputFields((v) => ({ ...v, password: e.target.value }))
              }
            />
          </FormField>

          <Button type="submit">Create account</Button>
        </Form>

        <FormFooter>
          Already have an account? <Link href="/login">Sign in</Link>
        </FormFooter>
      </FormCard>
    </FormContainer>
  );
}
