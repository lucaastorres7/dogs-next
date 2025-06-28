import statsGet from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AccountStats = dynamic(
  () => import("@/components/account/account-stats"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
  description: "Página de estatísticas da conta do usuário",
};

export default async function StatsPage() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <AccountStats data={data} />
    </section>
  );
}
