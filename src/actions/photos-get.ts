"use server";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: number;
};

export default async function photosGet() {
  const response = await fetch("https://dogsapi.origamid.dev/json/api/photo/");
  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }
  const data = (await response.json()) as Photo[];
  return data;
}
