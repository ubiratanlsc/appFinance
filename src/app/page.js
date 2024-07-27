"use client";
import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import Carrinho from "./components/Carrinho";
import TableView from "./components/Table";

export default function Home() {
  const [hidden, setHidden] = useState(true);
  return (
    <main className="min-h-screen flex justify-center">
      <div className="">
        <Carrinho classes={""} />
        <TableView classes={"flex justify-center"} />
      </div>
    </main>
  );
}
