"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import userPost from "@/actions/user-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCreateForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) {
      window.location.href = "/conta";
    }
  }, [state.ok]);

  return (
    <>
      <form action={action} className="mb-[2rem]">
        <Input label="Usuário" name="username" type="text" />
        <Input label="Email" name="email" type="email" />
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
