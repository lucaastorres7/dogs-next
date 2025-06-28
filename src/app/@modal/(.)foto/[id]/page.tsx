// Intercepting The Next.js Page Request using a Parallel Route (.)foto/[id]/page.tsx

import photoGet from "@/actions/photo-get";
import FeedModal from "@/components/feed/feed-modal";
import { notFound } from "next/navigation";

type PhotoIdParams = {
  params: { id: string };
};

export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: "Dogs | Fotos" };
  return {
    title: `Dogs | ${data.photo.title}`,
  };
}

export default async function PhotoIdPage({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return <FeedModal photo={data} />;
}
