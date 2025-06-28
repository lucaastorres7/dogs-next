import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container mainContainer">
      <h1 className="title">Página não encontrada</h1>
      <p>Ops! A página que você está procurando não existe.</p>
      <Link className="botao inline-block text-center mt-4" href={"/"}>
        Volte para a Home.
      </Link>
    </section>
  );
}
