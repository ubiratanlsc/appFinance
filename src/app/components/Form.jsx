import React, { useState } from 'react';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        valor: "",
        parcela: "",
        quantidadeParcelas: 0,
        data: "",
        hora: "",
        local: "",
        cartao: "",
        categoria: "",
        subcategoria: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para um servidor ou processá-los conforme necessário
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Valor:</label>
                <input
                    type="text"
                    name="valor"
                    value={formData.valor}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Parcela:</label>
                <input
                    type="text"
                    name="parcela"
                    value={formData.parcela}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Quantidade de Parcelas:</label>
                <input
                    type="number"
                    name="quantidadeParcelas"
                    value={formData.quantidadeParcelas}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Data:</label>
                <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Hora:</label>
                <input
                    type="time"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Local:</label>
                <input
                    type="text"
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Cartão:</label>
                <input
                    type="text"
                    name="cartao"
                    value={formData.cartao}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Categoria:</label>
                <input
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Subcategoria:</label>
                <input
                    type="text"
                    name="subcategoria"
                    value={formData.subcategoria}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default TransactionForm;
