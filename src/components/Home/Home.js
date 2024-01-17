import './Home.css';
import Inicio from '../Inicio/Inicio';
import Usuario from '../Usuario/Usuario';
import Agregar from '../Agregar/Agregar';
import Eliminar from '../Eliminar/Eliminar';
import { useState } from 'react';

export default function Home(){

     var components = [<Inicio />, <Usuario />, <Agregar />, <Eliminar />]

    const [isShown, setIsShow] = useState(components[0]);

    const showInicio = e => {
        setIsShow(components[0]);
    };

    const showUsuarios = e => {
        setIsShow(components[1]);
    }

    const showAgregar = e => {
        setIsShow(components[2]);
    }

    const showEliminar = e => {
        setIsShow(components[3]);
    }

    return <>
        <div className='header'>
            <img src='./escudo.png' className='escudo' alt='Escudo de Guatemala'></img>
            <div className='buttons'>
                <a onClick={showInicio} className='button'>Inicio</a>
                <a onClick={showUsuarios} className='button'>Usuarios</a>
                <a onClick={showAgregar} className='button'>Agregar</a>
                <a onClick={showEliminar} className='button'>Eliminar</a>
            </div>
        </div>
        { isShown }
    </>
}