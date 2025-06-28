"use server";

import { PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function photoPost(
  state: { ok: boolean; error: string; data: null } | undefined,
  formdata: FormData
) {
  const token = cookies().get("token")?.value;
  const nome = formdata.get("nome") as string | null;
  const idade = formdata.get("idade") as string | null;
  const peso = formdata.get("peso") as string | null;
  const img = formdata.get("img") as File;

  try {
    if (!token || !nome || !peso || !idade || img.size === 0) {
      throw new Error("Preencha os dados.");
    }

    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formdata,
    });
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag("photos");
  redirect("/conta");
}
