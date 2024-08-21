"use client";
import { useEffect, useState } from "react";
import api from "../api";

export default function Carrinho() {
  const [dados, setDados] = useState([]);
  const classes = "" ? props.classes : "";
  const porcentagens = [];
  const porcentagensCartoes = [];
  const categorias = [];
  const valores = [];
  const valoresCartoes = [];
  const cartoes = [];
  const fechamento = ['23', '03'];
  const faturas = {
    "Itaú Click Platinum": [],
    "PAO DE ACUCAR ITAU MC INTER": [],
    "Nubank Mastercard Gold": []
  };
  const cores = {
    "Itaú Click Platinum": "bg-orange-700",
    "PAO DE ACUCAR ITAU MC INTER": "bg-green-900",
    "Nubank Mastercard Gold": "bg-purple-900"
  }
  const dataAtual = new Date().toLocaleDateString();
  const mesAtual = dataAtual.split('/')[1];


  function compareDates(date1, date2) {
    let dataAtual = new Date().toLocaleDateString();
    let mesAtual = dataAtual.split('/')[1];
    let diaAtual = dataAtual.split('/')[0];

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    if (d1 < d2) {
      return -1;
    } else if (d1 > d2) {
      return 1;
    } else {
      return 0;
    }
  }
  useEffect(() => {
    // setDados([...assinaturas, ...transacao]);

    let transacao = api.get('/usuarios')
      .then((response) => response)
      .then((result) => {
        setDados([...result]);
      })
      .catch((error) => console.error(error));

  }, []);
  if (dados) {
    dados?.forEach((item) => {
      if (item.data.split('/')[1] === mesAtual) {
        console.log(item.data);
      }

      if (!categorias.includes(item.categoria)) {
        categorias.push(item.categoria);
      }
      if (!cartoes.includes(item.cartao)) {
        cartoes.push(item.cartao);
      }
    });
  }
  cartoes.forEach((item) => {
    let valor = 0;
    const total = dados?.length;
    const quantidade = dados?.filter((itens) => itens.cartao === item).length;
    const porcentagem = (quantidade / total) * 100;
    porcentagensCartoes.push({ item, porcentagem });
    dados?.forEach((dado) => {
      if (dado.cartao === item) {
        valor += dado.valor;
      }
    });
    valor = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
    valoresCartoes.push({
      value: valor,
      label: `${item}`,
      porcentagem: porcentagem.toFixed(2),
    });
  });


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

  //bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500

  //bg-zinc-800 rounded-lg p-2
  return (
    <div className="grid gap-4 mt-3">



      <div className="grid grid-flow-col gap-4">
        {valoresCartoes.map((item, index) => (
          <div className={`h-40 w-80 rounded-md ${cores[item.label]} grid`} key={index}>
            <h1 className="text-center mt-4 font-extrabold">{item.label}</h1>
            <div className="flex justify-around font-semibold">
              <span className="">{item.value}</span>
              <span className="">%{item.porcentagem}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={`${classes} grid gap-4 justify-items-center grid-cols-4`}>
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

    </div>

  )
}