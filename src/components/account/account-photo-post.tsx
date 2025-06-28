"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import photoPost from "@/actions/photo-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  );
}

export default function AccountPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const [img, setImg] = React.useState("");

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className="grid grid-cols-2 gap-[2rem] mb-[2rem] max-sm:grid-cols-1 animeLeft">
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />
        <input
          onChange={handleImgChange}
          className="mb-[1rem]"
          type="file"
          name="img"
          id="img"
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <div>
        <div
          className="rounded-2xl bg-cover bg-center after:block after:h-0 after:p-[100%]"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
