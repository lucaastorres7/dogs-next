import LoginCreateForm from "@/components/login/login-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua conta | Dogs",
  description: "Crie sua conta no site dogs.",
};

export default async function CreatePage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCreateForm />
    </div>
  );
}
