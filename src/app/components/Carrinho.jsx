"use client";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

export default function Carrinho() {
  const [dados, setDados] = useState();
  const classes = "" ? props.classes : "";
  const porcentagens = [];
  const categorias = [];
  const valores = [];

  useEffect(() => {
    fetch("http://localhost:5000/transacao", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cors: "cors",
    })
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(dados);
  if (dados) {
    dados.forEach((item) => {
      if (!categorias.includes(item.categoria)) {
        categorias.push(item.categoria);
      }
    });
  }
  categorias.forEach((item) => {
    let valor = 0;
    const total = dados.length;
    const quantidade = dados.filter((itens) => itens.categoria === item).length;
    const porcentagem = (quantidade / total) * 100;
    porcentagens.push({ item, porcentagem });
    dados.forEach((dado) => {
      if (dado.categoria === item) {
        valor += dado.valor;
      }
    });
    valor = valor.toFixed(2);
    valores.push({
      value: valor,
      label: `R$ ${valor} ${item}`,
      porcentagem: porcentagem.toFixed(2),
    });
  });
  const datas = [
    { value: 20, label: "A" },
    { value: 10, label: "B" },
    { value: 15, label: "C" },
    { value: 20, label: "D" },
  ];
  let data = valores ? valores : datas;
  const size = {
    width: 450,
    height: 300,
  };

  return (
    <div className={`${classes} flex justify-around`}>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.porcentagem}%`,
            arcLabelMinAngle: 15,
            data,
            innerRadius: 30,
            outerRadius: 110,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 110,
            cy: 150,
          },
        ]}
        legend={{
          direction: "column",
          position: { vertical: "middle", horizontal: "right" },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "black",
            color: "white",
            fontWeight: "bold",
          },
        }}
        {...size}
      />
    </div>
  );
}
