"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function LostLoginForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = React.useState<string>("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <>
      <form action={action} className="mb-[2rem]">
        <Input label="Email / Usuário" name="login" type="text" />
        <input type="hidden" name="url" value={url} />

        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p className="text-[#4c1]">Email enviado.</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
