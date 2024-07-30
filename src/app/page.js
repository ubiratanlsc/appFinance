"use client";
import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import Carrinho from "./components/Carrinho";
import TableView from "./components/Table";

export default function Home() {
  const [hidden, setHidden] = useState(true);
  //min-h-screen
  return (
    <main className="flex justify-center">
      <div className="mt-11 grid gap-5">
        <Carrinho classes={""} />
        <TableView classes={""} />
      </div>
    </main>
  );
}
