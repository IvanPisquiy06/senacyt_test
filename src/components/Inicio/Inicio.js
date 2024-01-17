import './Inicio.css';

export default function Inicio(){
    return <>
        <div className='main'>
            <div className='infoText'>
                <h2>Bienvenido al Portal de Usuarios</h2>
                <h3>Elija una de las opciones en la barra superior dependiendo la acción que desee realizar</h3>
            </div>
            <img src='./users.png' className='usersImg'></img>
        </div>
    </>
}