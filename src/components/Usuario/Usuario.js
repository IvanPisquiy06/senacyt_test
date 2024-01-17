import './Usuario.css';
import { useState } from 'react';
import Tabla from '../Tabla/Tabla';
import Message from '../Message/Message';

export default function Usuario(){

    const [showTable, setShowTable] = useState(false);
    const [jsonData, setJsonData] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

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
            setShowMessage(true);
            console.log(error)
        }
    }

    const messagePopUp = (show) => {
        setShowMessage(show)
    }

    return <>
        <h2 className='userTitle'>Usuarios en Sistema</h2>
        <div className='opciones'>
            <button onClick={getData} className='userBtn'>Obtener todos los Usuarios</button>
            <p> o </p>
            <div className='idOption'>
                <p>Busca un usuario por su ID:</p>
                <input type='text' placeholder='Ex: 12355608P' maxLength='9' id='userId'></input>
                <button onClick={getDataById} className='userBtn'>Obtener usuario</button>
            </div>
            { showMessage && <Message view={messagePopUp} message='Usuario no encontrado' />}
        </div>
        { showTable && <Tabla data={jsonData} /> }
    </>
};