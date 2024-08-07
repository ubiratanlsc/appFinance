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
    <main className="grid">
      <nav className="ml-4 mt-4">
        <button className="h-10 w-32 bg-zinc-700 rounded-md flex items-center justify-evenly" onClick={handleSubmit}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.41A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clipRule="evenodd" />
          </svg>
          <span className="text-white">Nova Conta</span>
        </button>
      </nav>
      <div className="grid gap-3 justify-items-center">
        <Carrinho classes={""} />
        <TableView classes={""} />
      </div>
    </main>
  );
}
