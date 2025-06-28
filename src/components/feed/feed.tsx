"use client";

import photosGet, { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";
import React from "react";
import Loading from "@/components/helper/loading";

export default function Feed({
  photos,
  user,
}: {
  photos: Photo[];
  user?: 0 | string;
}) {
  const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinite, setInfinite] = React.useState(
    photos.length < 6 ? false : true
  );

  const fetching = React.useRef(false);

  function infiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;

    setLoading(true);

    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (page === 1) return;

    async function fetchPhotos(page: number) {
      const response = await photosGet(
        { page, total: 6, user: 0 },
        { cache: "no-store" } // Disable cache for this request
      );
      if (response && response.data !== null) {
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...response.data]);

        if (response.data.length < 6) setInfinite(false);
      }
    }
    fetchPhotos(page);
  }, [page]);

  React.useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className="flex h-24 my-4 mx-auto">
        {infinite ? (
          loading && <Loading />
        ) : (
          <p className="text-center m-auto text-[#888]">
            Não existem mais postagens
          </p>
        )}
      </div>
    </div>
  );
}
