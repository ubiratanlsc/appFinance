import React, { useEffect, useState } from "react";
import Table from "@mui/joy/Table";

const TableView = (props) => {
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
  function createData(local, value, data, hora, tipo, subtipo) {
    const valor = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    // console.log(formattedValor);
    return { local, valor, data, hora, tipo, subtipo };
  }
  const rows = [
  ];
  dados?.forEach(element => {
    rows.push(createData(element.local, element.valor, element.data, element.hora, element.categoria, element.subcategoria))
  });




  return (
    <div className={`${props.classes} grid gap-3`}>
      <div className="grid grid-flow-col h-10 bg-zinc-800 rounded-lg content-center justify-items-center">
        <div className="grid content-center justify-items-center  w-64">Local</div>
        <div className="grid content-center justify-items-center  w-28">Valor</div>
        <div className="grid content-center justify-items-center  w-48">Data&nbsp;</div>
        <div className="grid content-center justify-items-center  w-28">Hora&nbsp;</div>
        <div className="grid content-center justify-items-center  w-36">Tipo&nbsp;</div>
        <div className="grid content-center justify-items-center  w-36">Subtipo&nbsp;</div>
      </div>
      {rows.map((row, index) => (
        <div className="grid grid-flow-col h-10 bg-zinc-800 rounded-lg content-center justify-items-center" key={index}>
          <div className="grid content-center justify-items-center  w-64">{row.local}</div>
          <div className="grid content-center justify-items-center  w-28">{row.valor}</div>
          <div className="grid content-center justify-items-center  w-48">{row.data}</div>
          <div className="grid content-center justify-items-center  w-28">{row.hora}</div>
          <div className="grid content-center justify-items-center  w-36">{row.tipo}</div>
          <div className="grid content-center justify-items-center  w-36">{row.subtipo}</div>
        </div>
      ))}
      {/* <table className="min-w-full">
        <thead >
          <tr>
            <th className="text-center w-72 text-slate-100 bg-black border-collapse border-e-[1px] border-slate-600 rounded-tl-lg">Local</th>
            <th className="text-center w-32 text-slate-100 bg-black border-collapse border-e-[1px] border-slate-600">Valor</th>
            <th className="text-center w-32 text-slate-100 bg-black border-collapse border-e-[1px] border-slate-600">Data&nbsp;</th>
            <th className="text-center w-32 text-slate-100 bg-black border-collapse border-e-[1px] border-slate-600">Hora&nbsp;</th>
            <th className="text-center w-32 text-slate-100 bg-black border-collapse border-e-[1px] border-slate-600">Tipo&nbsp;</th>
            <th className="text-center w-32 text-slate-100 bg-black rounded-tr-lg">Subtipo&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (

            <tr key={index}>
              <th className="text-center text-slate-100 border-collapse border-e-[1px] border-slate-600">{row.local}</th>
              <td className="text-center text-slate-100 border-collapse border-e-[1px] border-slate-600">{row.valor}</td>
              <td className="text-center text-slate-100 border-collapse border-e-[1px] border-slate-600">{row.data}</td>
              <td className="text-center text-slate-100 border-collapse border-e-[1px] border-slate-600">{row.hora}</td>
              <td className="text-center text-slate-100 border-collapse border-e-[1px] border-slate-600">{row.tipo}</td>
              <td className="text-center text-slate-100 border-collapse border-e-[1px] border-slate-600">{row.subtipo}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default TableView;
