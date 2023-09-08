import React, { useContext, useState } from "react";
import { ForgetPasswordStyled } from "../styles/global.styled";
import {
  Button,
  Fieldset,
  Form,
  FormField,
  Input,
  Label,
} from "../styles/FormStyling.styled";
import Link from "next/link";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <ForgetPasswordStyled>
      <Form method="POST">
        <Fieldset>
          <FormField>
            <Label htmlFor="emailId">Email: </Label>
            <Input
              id="emailId"
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <Button>Submit</Button>
        </Fieldset>
      </Form>
      <p>
        Want to <Link href={"/login"}>Login</Link>
      </p>
    </ForgetPasswordStyled>
  );
}
