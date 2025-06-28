import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className="grid grid-cols-3 gap-[1rem] mb-[1rem] justify-items-center max-sm:grid-cols-2 animeLeft [&>li:nth-child(2)]:col-start-2 [&>li:nth-child(2)]:col-end-4 [&>li:nth-child(2)]:row-span-2 max-sm:[&>li:nth-child(2)]:col-auto max-sm:[&>li:nth-child(2)]:row-auto">
      {photos.map((photo) => (
        <li key={photo.id}>
          <Link
            href={`/foto/${photo.id}`}
            scroll={false}
            className="group grid overflow-hidden cursor-pointer rounded-sm"
          >
            <Image
              className="col-start-1 row-start-1"
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className="row-start-1 col-start-1 bg-black/30 text-white text-[1rem] text-center items-center justify-center hidden group-hover:flex before:w-[16px] before:h-[10px] before:inline-block before:mr-[0.25rem] before:bg-[url(/assets/visualizacao.svg)] after:bg-no-repeat">
              {photo.acessos}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
