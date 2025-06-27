export default function ErrorMessage({ error }: { error: string }) {
  if (error === "") return null;
  return <p className="text-[#f31] my-[1rem]">{error}</p>;
}
