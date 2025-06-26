export default async function PhotoIdPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div>
      <h1>Foto ID: {params.id}</h1>
      <p>Esta é a página de foto com o ID {params.id}.</p>
    </div>
  );
}
