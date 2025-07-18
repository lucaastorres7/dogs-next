"use server";

import { PHOTO_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Photo } from "./photos-get";

type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export default async function photoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: { revalidate: 60, tags: ["photos", "comments"] },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch photo");
    }

    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
