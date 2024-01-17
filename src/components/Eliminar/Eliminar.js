import './Eliminar.css';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import Message from '../Message/Message';

export default function Eliminar(){

    let messages = ['Usuario eliminado con éxito', 'Usuario no encontrado'];

    const [showPopUp, setShowPopUp] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState(null);
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

    const displayMessage = (message) => {
        setMessage(messages[message])
    }

    const messagePopUp = (show) => {
        setShowMessage(show)
    }

    return <div className='deleteContainer'>
        <h2 className='deleteTitle'>Ingrese el ID del usuario que desea eliminar</h2>
        <input type='text' className='delete' id='delete' placeholder='Ex: 12355608P' maxLength='9'></input>
        <button className='deleteBtn' onClick={handlePopUp}>Eliminar Usuario</button>
        { showPopUp && <Popup id={id} view={closePopUp} messagePopUp={messagePopUp} message={displayMessage} />}
        { showMessage && <Message view={messagePopUp} message={message} />}
    </div>
}