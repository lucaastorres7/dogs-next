"use client";

import { useUser } from "@/context/user-context";
import React from "react";

export default function AccountPage() {
  const { user } = useUser();

  return (
    <div>
      <h1>Conta {user?.name}</h1>
      <p>Esta é a página de conta.</p>
    </div>
  );
}
