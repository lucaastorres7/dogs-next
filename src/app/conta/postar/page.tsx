import AccountPhotoPost from "@/components/account/account-photo-post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
  description: "Página para postar conteúdo",
};

export const runtime = "edge"; // Use edge runtime for better performance

export default async function PostPage() {
  return (
    <div>
      <AccountPhotoPost />
    </div>
  );
}
