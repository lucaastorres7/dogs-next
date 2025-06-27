"use server";

import { TOKEN_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function login(
  state: { ok: boolean; error: string; data: null } | undefined,
  formdata: FormData
) {
  const username = formdata.get("username") as string | null;
  const password = formdata.get("password") as string | null;

  try {
    if (!username || !password) {
      throw new Error("Preencha os dados.");
    }

    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formdata,
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas.");
    }

    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
