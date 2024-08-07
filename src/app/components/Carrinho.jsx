"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import api from "../api";

export default function Carrinho() {
  const [dados, setDados] = useState([]);
  const classes = "" ? props.classes : "";
  const porcentagens = [];
  const categorias = [];
  const valores = [];



  useEffect(() => {
    // setDados([...assinaturas, ...transacao]);

    let transacao = api.get('/usuarios')
      .then((response) => response)
      .then((result) => {
        setDados([...result]);
      })
      .catch((error) => console.error(error));

    // let assinatura = api.get('/assinaturas')
    //   .then((response) => response)
    //   .then((result) => {
    //     setDados([...result]);
    //   })
    //   .catch((error) => console.error(error));


  }, []);

  // useEffect(() => {

  //   console.log(fetchData());
  //   fetch("http://localhost:5000/transacao", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     cors: "cors",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setDados(data))
  //     .catch((error) => console.log(error));
  // }, []);7
  if (dados) {
    dados?.forEach((item) => {
      if (!categorias.includes(item.categoria)) {
        categorias.push(item.categoria);
      }
    });
  }
  categorias.forEach((item) => {
    let valor = 0;
    const total = dados?.length;
    const quantidade = dados?.filter((itens) => itens.categoria === item).length;
    const porcentagem = (quantidade / total) * 100;
    porcentagens.push({ item, porcentagem });
    dados?.forEach((dado) => {
      if (dado.categoria === item) {
        valor += dado.valor;
      }
    });
    valor = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
    valores.push({
      value: valor,
      label: `${item}`,
      porcentagem: porcentagem.toFixed(2),
    });
  });


  return (
    <div className={`${classes} grid grid-flow-col gap-4 justify-items-center`}>
      {
        valores.map((item, index) => (
          <div key={index} className="w-60 h-20 bg-zinc-800 rounded-lg grid ">
            <h1 className="text-center">{item.label}</h1>
            <div className="flex justify-around">
              <h2 className="">{item.value}</h2>
              <h2 className="">%{item.porcentagem}</h2>
            </div>
          </div>
        ))
      }
    </div>
  )
}