import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Minha Conta",
  description: "Página de conta do usuário",
};

export default async function AccountPage() {
  const { data: user } = await userGet();
  const { data } = await photosGet({ user: user?.username });

  return (
    <div>
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p className="text-[#444] text-xl mb-4">Nenhuma foto encontrada.</p>

          <Link
            href={`/conta/postar`}
            className="botao inline-block text-center"
          >
            Postar foto
          </Link>
        </div>
      )}
    </div>
  );
}
