export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <div>
      <h1>Perfil de {params.user}</h1>
      <p>Esta é a página de perfil do usuário {params.user}.</p>
    </div>
  );
}
