'use client';
import { use, useEffect, useState } from 'react';
import manageSessionStorage from '../functions/session';


const Footer = (props) => {

    const [selectedOption, setSelectedOption] = useState('');

    const objMeses = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    }
    const meses = Object.values(objMeses)

    const handleOptionChange = (event) => {

        setSelectedOption(event.target.value);

    };
    const dataAtual = new Date().toLocaleDateString();
    const mesAtual = parseInt(dataAtual.split('/')[1]);

    useEffect(() => {
        manageSessionStorage('set', 'mes', mesAtual)
        setSelectedOption(objMeses[mesAtual])
    }, [])

    return (
        <div className={props.className}>
            <ul id="timetable" className="grid grid-cols-12 gap-4 mt-5">
                {meses.map((item, index) => (

                    <li key={index}>
                        <input type="radio" id={item} value={item} className="hidden peer" name={item} checked={selectedOption == item} onChange={handleOptionChange} />
                        <label htmlFor={item}
                            className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-zinc-600 border-zinc-600 dark:hover:text-white dark:border-zinc-500 dark:peer-checked:border-zinc-500 peer-checked:border-zinc-600 peer-checked:bg-zinc-600 hover:text-white peer-checked:text-white hover:bg-zinc-500 dark:text-zinc-500 dark:bg-zinc-900 dark:hover:bg-zinc-600 dark:hover:border-zinc-600 dark:peer-checked:bg-zinc-800">
                            {item}
                        </label>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Footer;