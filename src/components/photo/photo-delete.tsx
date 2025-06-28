"use client";
import React from "react";
import photoDelete from "@/actions/photo-delete";

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      await photoDelete(id);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <button
          className={`bg-[#ddd] py-1 px-2 text-sm border border-solid border-transparent rounded-md transition duration-100 cursor-pointer font-first hover:outline-none hover:bg-white hover:border-[#333] hover:shadow-[0_0_0_3px_rgba(51,51,51,1)] focus:outline-none focus:bg-white focus:border-[#333] focus:shadow-[0_0_0_3px_rgba(51,51,51,1)]`}
          disabled
        >
          Deletar
        </button>
      ) : (
        <button
          className={`bg-[#ddd] py-1 px-1 text-sm border border-solid border-transparent rounded-md transition duration-100 cursor-pointer font-first hover:outline-none hover:bg-white hover:border-[#333] focus:outline-none focus:bg-white focus:border-[#333]`}
          onClick={handleClick}
        >
          Deletar
        </button>
      )}
    </>
  );
}
