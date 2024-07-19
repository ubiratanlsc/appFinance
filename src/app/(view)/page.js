
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

export default function Info() {
    const [dados, setDados] = useState();

    const categorias = []

    // useEffect(() => {
    //     fetch('http://localhost:5000/transacao',
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             cors: 'cors'
    //         }
    //     )
    //         .then(response => response.json())
    //         .then(data => setDados(data))
    //         .catch(error => console.log(error));
    // }, []);
    // console.log(dados);
    // if (dados) {
    //     dados.forEach((item) => {
    //         if (!categorias.includes(item.categoria)) {
    //             categorias.push(item.categoria);
    //         }
    //     });
    // }
    // console.log(categorias);

    const data = [
        { value: 20, label: 'A' },
        { value: 10, label: 'B' },
        { value: 15, label: 'C' },
        { value: 20, label: 'D' },
    ];

    const size = {
        width: 400,
        height: 200,
    };

    return (
        <>
            <PieChart
                series={[
                    {
                        arcLabel: (item) => `${item.label} (${item.value})`,
                        arcLabelMinAngle: 45,
                        data,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                    },
                }}
                {...size}
            />
        </>
    );
}
