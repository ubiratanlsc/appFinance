'use client'
import React, { useState } from 'react';
import InputForm from '../components/InputForm';

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
        // console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className='max-w-7xl mx-auto grid md:grid-cols-3 gap-2 mt-7'>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="valor"
                        value={formData.valor}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Valor'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parcela</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">

                        <svg className="w-5 h-5 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24,20c0,1.654-1.346,3-3,3,0,.552-.448,1-1,1s-1-.448-1-1h0s-.268,0-.268,0c-1.068,0-2.063-.574-2.598-1.499-.276-.478-.113-1.089,.365-1.366,.477-.277,1.09-.113,1.366,.365,.178,.308,.511,.5,.867,.5h2.268c.551,0,1-.448,1-1,0-.378-.271-.698-.644-.76l-3.042-.507c-1.341-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3,0-.552,.448-1,1-1s1,.448,1,1h0s.268,0,.268,0c1.068,0,2.063,.574,2.598,1.499,.276,.478,.113,1.089-.365,1.366-.477,.277-1.089,.113-1.366-.365-.178-.308-.511-.5-.867-.5h-2.268c-.551,0-1,.448-1,1,0,.378,.271,.698,.644,.76l3.042,.507c1.341,.223,2.315,1.373,2.315,2.733Zm-.081-12.623c-.234-.871-.584-1.708-1.038-2.487C21.513,2.543,19.278,.827,16.659,.112c-.173-.047-.559-.074-.559-.074-.138,0-.732,0-1.203,.381-.691,.544-.8,1.163-.81,1.211-.036,.151-.054,.307-.055,.462V6.919c0,1.702,1.379,3.081,3.081,3.081h4.847c.643,.002,1.248-.303,1.629-.822,.282-.38,.426-.843,.411-1.316-.008-.164-.035-.327-.08-.486Zm-9.516,15.125c-.705-1.22-.453-2.735,.523-3.669-.585-.795-.926-1.777-.926-2.833,0-1.629,.791-3.069,2.001-3.983h-2.008c-1.106,0-2.002-.896-2.002-2.002V5.283c.003-.933-.429-1.815-1.167-2.386-.7-.554-1.618-.752-2.484-.535C2.452,3.824-1.135,9.781,.326,15.667c1.029,4.147,4.371,7.321,8.566,8.135,2.104,.403,4.188,.172,6.055-.554-.2-.232-.388-.476-.544-.746Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="parcela"
                        value={formData.parcela}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Parcela'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantidade de Parcelas</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9,4c0-2.209,3.358-4,7.5-4s7.5,1.791,7.5,4-3.358,4-7.5,4-7.5-1.791-7.5-4Zm7.5,6c-1.027,0-2.001-.115-2.891-.315-1.359-1.019-3.586-1.685-6.109-1.685-4.142,0-7.5,1.791-7.5,4s3.358,4,7.5,4,7.5-1.791,7.5-4c0-.029-.007-.057-.008-.086h.008v2.086c0,2.209-3.358,4-7.5,4S0,16.209,0,14v2c0,2.209,3.358,4,7.5,4s7.5-1.791,7.5-4v2c0,2.209-3.358,4-7.5,4S0,20.209,0,18v2c0,2.209,3.358,4,7.5,4s7.5-1.791,7.5-4v-.08c.485,.052,.986,.08,1.5,.08,4.142,0,7.5-1.791,7.5-4v-2c0,2.119-3.092,3.849-7,3.987v-2c3.908-.138,7-1.867,7-3.987v-2c0,2.119-3.092,3.849-7,3.987v-2c3.908-.138,7-1.867,7-3.987v-2c0,2.209-3.358,4-7.5,4Z" />
                        </svg>
                    </div>
                    <input
                        type="number"
                        name="quantidadeParcelas"
                        value={formData.quantidadeParcelas}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                        placeholder='Quantidade de Parcelas'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">

                        <svg className="w-6 h-6 text-gray-500 dark:gray-400 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m24,4v14c0,2.209-1.791,4-4,4h-2.015s0,0-.001-.002c.836-2.512,2.016-6.892,2.013-11.634l.003-1.846c.264.133.54.24.823.319.589.165,1.177-.265,1.177-.876h0c0-.478-.286-.931-.741-1.076-.326-.104-.627-.276-.888-.5-.299-.256-.668-.384-1.037-.384s-.738.128-1.037.384c-.451.386-1.016.616-1.63.616s-1.179-.23-1.63-.616c-.299-.256-.668-.384-1.037-.384s-.738.128-1.037.384c-.451.386-1.016.616-1.63.616s-1.179-.23-1.63-.616c-.299-.256-.668-.384-1.037-.384s-.738.128-1.037.384l-.014.012c-.637.539-1.616.068-1.616-.767v-1.629C6,1.794,7.794,0,10,0h10c2.209,0,4,1.791,4,4Zm-6.001,6.458c0,4.144-.978,8.03-1.798,10.567-.575,1.779-2.223,2.975-4.1,2.975H3.322c-1.121,0-2.208-.582-2.837-1.52-.581-.864-.695-1.895-.314-2.825.823-2.012,2.356-5.757,2.406-9.17.004-.289.133-.561.353-.748.484-.402,1.22-.73,1.813-.739.621-.01,1.244.196,1.75.616.608.504,1.48.504,2.087,0,.99-.821,2.428-.821,3.418,0,.607.504,1.479.504,2.087,0,.511-.424,1.141-.629,1.767-.615.588.013,1.257.284,1.737.682.246.18.396.461.409.766v.012Zm-7.521,2.663c-.37-.201-.83-.149-1.146.135l-1.5,1.346c-.411.368-.445,1.001-.076,1.412.238.266.585.374.916.317-.17,1.227-.383,2.568-.645,3.353-.175.524.108,1.091.632,1.265.105.035.212.052.316.052.419,0,.809-.265.949-.684.399-1.198,1.004-5.781,1.064-6.16.066-.418-.138-.833-.51-1.035Z" />

                        </svg>
                    </div>
                    <input
                        type="date"
                        name="data"
                        value={formData.data}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                        placeholder='Data'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-6 h-6 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m14.987,22c1.074,0,2.089-.251,3-.685v1.685c0,.553-.447,1-1,1H6.987c-.553,0-1-.447-1-1v-1.685c.911.435,1.926.685,3,.685h6Zm5-13v6c0,2.757-2.243,5-5,5h-6c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5h6c2.757,0,5,2.243,5,5Zm-5.28,4.293l-1.707-1.707v-3.586c0-.553-.447-1-1-1s-1,.447-1,1v4c0,.266.105.52.293.707l2,2c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414Zm.28-11.293c1.074,0,2.089.251,3,.685v-1.685c0-.553-.447-1-1-1H6.987c-.553,0-1,.447-1,1v1.685c.911-.435,1.926-.685,3-.685h6Z" />

                        </svg>
                    </div>
                    <input
                        type="time"
                        name="hora"
                        value={formData.hora}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                        placeholder='Hora'
                    />
                </div>

            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.243,10.764a6,6,0,0,0-8.486,8.485l3.507,3.43a1.053,1.053,0,0,0,1.472,0l3.507-3.43A6,6,0,0,0,16.243,10.764ZM12,16.994a2,2,0,1,1,2-2A2,2,0,0,1,12,16.994Z" />
                            <path d="M21.8,5.579,14.8.855A4.981,4.981,0,0,0,9.2.855l-7,4.724A4.993,4.993,0,0,0,0,9.724V19a5.006,5.006,0,0,0,5,5H9.754L6.359,20.679A8,8,0,1,1,17.657,9.35h0a8,8,0,0,1,0,11.313L14.245,24H19a5.006,5.006,0,0,0,5-5V9.724A5,5,0,0,0,21.8,5.579Z" />

                        </svg>
                    </div>
                    <input
                        type="text"
                        name="local"
                        value={formData.local}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-1"
                        placeholder='Local'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cartão</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24,8H0C0,5.243,2.243,3,5,3h14c2.757,0,5,2.243,5,5Zm0,2v6c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-6H24Zm-14.249,6.999v-1.998c0-.449,.358-.751,.749-.751,.288,.005,.544,.173,.669,.411,.106,.202,.32,.324,.548,.324,.472,0,.776-.504,.553-.92-.335-.629-1.003-1.059-1.77-1.064h0c-1.109-.001-2,.889-2,1.984v2.03c0,1.094,.891,1.985,2,1.985h0c.768-.006,1.435-.436,1.77-1.065,.222-.417-.081-.92-.553-.92-.228,0-.442,.122-.548,.324-.125,.238-.381,.406-.669,.411-.391,0-.749-.302-.749-.751Zm7.109-3.268c.079-.377-.209-.731-.594-.731h-.012c-.287,0-.535,.202-.594,.483l-.583,2.799-.71-2.823c-.068-.27-.31-.459-.588-.459-.395,0-.685,.372-.588,.755l1.171,4.652c.088,.349,.402,.593,.761,.593,.372,0,.693-.261,.768-.625l.969-4.645Zm4.5,0c.079-.377-.209-.731-.594-.731h-.012c-.287,0-.535,.202-.594,.483l-.583,2.799-.71-2.823c-.068-.27-.31-.459-.588-.459-.395,0-.685,.372-.588,.755l1.171,4.652c.088,.349,.402,.593,.761,.593,.372,0,.693-.261,.768-.625l.969-4.645Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="cartao"
                        value={formData.cartao}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Cartão'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.526,8.284L13.937,.879C13.278,.219,12.33-.104,11.409,.028L4.521,.97c-.547,.075-.93,.579-.855,1.126,.075,.547,.578,.929,1.127,.855l6.889-.942c.306-.042,.622,.063,.851,.292l7.59,7.405c1.045,1.045,1.147,2.68,.323,3.847-.234-.467-.523-.912-.911-1.3l-7.475-7.412c-.658-.658-1.597-.975-2.528-.851l-6.889,.942c-.454,.062-.808,.425-.858,.881l-.765,6.916c-.1,.911,.214,1.804,.864,2.453l7.416,7.353c.944,.945,2.199,1.464,3.534,1.464h.017c1.342-.004,2.6-.532,3.543-1.487l3.167-3.208c.927-.939,1.393-2.159,1.423-3.388l.577-.576c1.925-1.95,1.914-5.112-.032-7.057Zm-15.526,1.716c-.552,0-1-.448-1-1,.006-1.308,1.994-1.307,2,0,0,.552-.448,1-1,1Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Categoria'
                    />
                </div>

            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subcategoria</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.526,8.284L13.937,.879C13.278,.219,12.33-.104,11.409,.028L4.521,.97c-.547,.075-.93,.579-.855,1.126,.075,.547,.578,.929,1.127,.855l6.889-.942c.306-.042,.622,.063,.851,.292l7.59,7.405c1.045,1.045,1.147,2.68,.323,3.847-.234-.467-.523-.912-.911-1.3l-7.475-7.412c-.658-.658-1.597-.975-2.528-.851l-6.889,.942c-.454,.062-.808,.425-.858,.881l-.765,6.916c-.1,.911,.214,1.804,.864,2.453l7.416,7.353c.944,.945,2.199,1.464,3.534,1.464h.017c1.342-.004,2.6-.532,3.543-1.487l3.167-3.208c.927-.939,1.393-2.159,1.423-3.388l.577-.576c1.925-1.95,1.914-5.112-.032-7.057Zm-15.526,1.716c-.552,0-1-.448-1-1,.006-1.308,1.994-1.307,2,0,0,.552-.448,1-1,1Z" />

                        </svg>
                    </div>
                    <input
                        type="text"
                        name="subcategoria"
                        value={formData.subcategoria}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='SubCategoria'
                    />
                </div>

            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default TransactionForm;
