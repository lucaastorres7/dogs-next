"use client";

import React from "react";
import login from "@/actions/login";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import Link from "next/link";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
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
        <Input label="Senha" name="password" type="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <Link
        className="inline-block text-[#666] py-[0.5rem] after:h-[2px] after:w-full after:bg-current after:block"
        href="/login/perdeu"
      >
        Perdeu a senha?
      </Link>

      <div className="my-[4rem]">
        <h2 className="font-second text-[2rem] relative after:block after:bg-[#ddd] after:h-[0.5rem] after:w-[3rem] after:rounded-sm after:absolute after:bottom-[1px]">
          Cadastre-se
        </h2>
        <p className="my-[2rem]">
          Ainda não possui conta? Cadastre-se no site.
        </p>
        <Link className="botao" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
}
