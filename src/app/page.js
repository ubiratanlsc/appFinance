"use client";
import Image from "next/image";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import Carrinho from "./components/Carrinho";
import TableView from "./components/Table";
import { useRouter } from "next/navigation";
export default function Home() {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const handleSubmit = () => {
    router.push('/form')
  }

  //min-h-screen
  return (
    <main className="">
      <div className="grid gap-3 justify-items-start">
        <Carrinho classes={""} />
        {/* <TableView classes={""} /> */}
      </div>
    </main>
  );
}
