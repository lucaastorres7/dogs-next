import LoginResetForm from "@/components/login/login-reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete sua senha.",
};

type ResetPageProps = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetPage({ searchParams }: ResetPageProps) {
  return (
    <div className="animeLeft">
      <h1 className="title">Redefinir Senha</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
