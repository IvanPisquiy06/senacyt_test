import './Eliminar.css';
import { useState } from 'react';
import Popup from '../Popup/Popup';

export default function Eliminar(){

    const [showPopUp, setShowPopUp] = useState(false);
    const [id, setId] = useState(null);

    const handlePopUp = e => {
        let id = document.getElementById('delete').value;
        if (id.length === 0) return;
        setId(id);
        setShowPopUp(true);
    }

    const closePopUp = (show) => {
        setShowPopUp(show);
    }

    return <div className='deleteContainer'>
        <h2 className='deleteTitle'>Ingrese el ID del usuario que desea eliminar</h2>
        <input type='text' className='delete' id='delete' maxLength='9'></input>
        <button className='deleteBtn' onClick={handlePopUp}>Eliminar Usuario</button>
        { showPopUp && <Popup id={id} view={closePopUp} />}
    </div>
}