import React, { useState } from "react";
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
import { useRouter } from "next/router";
import axios from "axios";
import { API_ROUTES } from "../../../../utils/ApiManage";
import { cookiesMethods, localStorageMethods } from "../../../../utils/helper";
import { message } from "antd";

export default function LoginForm() {
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
        localStorageMethods.setItem("token", response.data.token);
        cookiesMethods.set("token", response.data.token);
        router.replace("/");
        message.success("Successfully logged in!");
      }
    } catch (error) {
      message.error("Invalid email or password");
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <Form onSubmit={handleSubmit}>
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

          <Button type="submit">Sign in</Button>
        </Form>

        <FormFooter>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              Don’t have an account? <Link href="/signup">Create one</Link>
            </span>
            <span>
              <Link href="/forget-password">Forgot password?</Link>
            </span>
          </div>
        </FormFooter>
      </FormCard>
    </FormContainer>
  );
}
