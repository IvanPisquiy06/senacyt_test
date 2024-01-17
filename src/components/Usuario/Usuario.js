import './Usuario.css';
import { useState } from 'react';
import Tabla from '../Tabla/Tabla';

export default function Usuario(){

    const [showTable, setShowTable] = useState(false);
    const [jsonData, setJsonData] = useState(null);

    async function getData(){
        try{
            const data = await fetch('https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items');
            if(!data.ok){
                throw new Error("Error en la respuesta del servidor");
            };
            const respose = await data.json();
            const dataArray = Object.values(respose);
            dataArray.shift();
            console.log(dataArray);
            setJsonData(dataArray);
            setShowTable(true);
        } catch(error){
            console.log(error)
        }
    }

    async function getDataById(){
        let id = document.getElementById('userId').value;
        if (!id) {
            console.log('error')
            return
        };
        try{
            const data = await fetch('https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items/' + id);
            if(!data.ok){
                throw new Error("Error en la respuesta del servidor");
            };
            const respose = await data.json();
            const dataArray = [respose];
            setJsonData(dataArray);
            setShowTable(true);
        } catch(error){
            console.log(error)
        }
    }

    return <>
        <h2 className='userTitle'>Usuarios en Sistema</h2>
        <div className='opciones'>
            <button onClick={getData} className='userBtn'>Obtener todos los Usuarios</button>
            <p> o </p>
            <div className='idOption'>
                <p>Busca un usuario por su ID:</p>
                <input type='text' id='userId'></input>
                <button onClick={getDataById} className='userBtn'>Obtener usuario</button>
            </div>
        </div>
        { showTable && <Tabla data={jsonData} /> }
    </>
};