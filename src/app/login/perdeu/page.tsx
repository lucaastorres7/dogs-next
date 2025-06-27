import LostLoginForm from "@/components/login/lost-login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere sua senha.",
};

export default async function LostPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LostLoginForm />
    </div>
  );
}
