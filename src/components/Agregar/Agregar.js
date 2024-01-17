import './Agregar.css';
import { useEffect } from 'react';

export default function Agregar(){

    useEffect(() => {
        const form = document.getElementById('userForm');
        form.addEventListener('submit', sendData);

        // Cleanup: Remove the event listener when the component is unmounted
        return () => {
            form.removeEventListener('submit', sendData);
        };
    }, []);

    function sendData(e){
        const url = 'https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items'

        e.preventDefault()

        let id = document.getElementById('id').value;
        let nombres = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellido').value.split(" ");
        let user = document.getElementById('user').value;
        let password = document.getElementById('password').value;
        let nacimiento = document.getElementById('nacimiento').value;
        let ssn = document.getElementById('ssn').value;
        let email = document.getElementById('email').value;
        let tel = document.getElementById('tel').value;
        let provincia = document.getElementById('provincia').value;
        let municipio = document.getElementById('municipio').value;
        let postal = document.getElementById('postal').value;
        let address = document.getElementById('address').value;
        let fullAddress = document.getElementById('fullAddress').value;
        let via = document.getElementById('via').value;
        let iban = document.getElementById('iban').value;
        let bic = document.getElementById('bic').value;
        let pasaporte = document.getElementById('pasaporte').value;
        let tarjeta = document.getElementById('tarjeta').value;
        let expiracion = document.getElementById('expiracion').value;
        let cvc = document.getElementById('cvc').value;

        
        let apellido1 = apellidos[0];
        let apellido2 = apellidos[1];

        let nombreCompleto = nombres + ' ' + apellido1 + ' ' + apellido2;

        let userInfo = {
            "nombre": nombres,
            "codigo_postal": postal,
            "fecha_nacimiento": nacimiento,
            "provincia": provincia,
            "apellido2": apellido2,
            "email": email,
            "apellido1": apellido1,
            "numero_via": via,
            "direccion_completa": fullAddress,
            "direccion": address,
            "ssn": ssn,
            "tarjeta_fecha": expiracion,
            "nombre_completo": nombreCompleto,
            "iban": iban,
            "municipio": municipio,
            "contrasenya": password,
            "pasaporte": pasaporte,
            "telefono": tel,
            "nombre_usuario": user,
            "tarjeta_cvc": cvc,
            "bic": bic,
            "id": id,
            "tarjeta": tarjeta
        }
        console.log(userInfo);
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the server responds with JSON data
        })
        .then(data => {
            console.log('PUT request successful:', data);
            // Handle the response data as needed
        })
        .catch(error => {
            console.error('Error during PUT request:', error);
            // Handle the error as needed
        });
    }

    return <>
        <h2 className='formTitle'>Por favor, ingrese los siguientes datos para crear un nuevo usuario</h2>
        <form className='user-form' id='userForm'>
            <label htmlFor='id' className='etiqueta'>ID</label>
            <input type='text' id='id' maxLength='9' minLength='9' className='campo' name='id' pattern='\d{8}[A-Z]' placeholder='Ex: 12355608P' required></input>

            <label className='etiqueta'>Nombre(s)</label>
            <input type='text' id='nombre' maxLength='5' className='campo' name='nombre' placeholder='Ivan' required></input>

            <label className='etiqueta'>Apellido(s)</label>
            <input type='text' id='apellido' className='campo' placeholder='Pisquiy' required></input>

            <label className='etiqueta'>Nombre de Usuario</label>
            <input type='text' id='user' className='campo' name='nombre_usuario' placeholder='Ivan_06' required></input>

            <label className='etiqueta'>Contraseña</label>
            <input type='password' id='password' className='campo' name='contrasenya' required></input>

            <label className='etiqueta'>Fecha de Nacimiento</label>
            <input type='date' id='nacimiento' className='campo' name='fecha_nacimiento' required></input>

            <label className='etiqueta'>SSN</label>
            <input type='number' id='ssn' className='campo' name='ssn' required></input>

            <label className='etiqueta'>Email</label>
            <input type='email' id='email' className='campo' name='email' placeholder='pisquiy22@gmail.com' required></input>

            <label className='etiqueta'>Telefono</label>
            <input type='tel' id='tel' className='campo' name='telefono' required></input>

            <label className='etiqueta'>Provincia</label>
            <input type='text' id='provincia' className='campo' name='provincia' required></input>

            <label className='etiqueta'>Municipio</label>
            <input type='text' id='municipio' className='campo' name='municipio' required></input>

            <label className='etiqueta'>Código Postal</label>
            <input type='text' minLength='5' pattern='[0-9]{5}' maxLength='5' id='postal' className='campo' name='codigo_postal' placeholder='00000' required></input>

            <label className='etiqueta'>Direccion</label>
            <input type='text' id='address' className='campo' name='direccion' required></input>

            <label className='etiqueta'>Direccion completa</label>
            <input type='text' id='fullAddress' className='campo' name='direccion_completa' required></input>

            <label className='etiqueta'>Numero via</label>
            <input type='number' id='via' className='campo' name='numero_via' required></input>

            <label className='etiqueta'>iban</label>
            <input type='text' id='iban' className='campo' name='iban' required></input>
            
            <label className='etiqueta'>bic</label>
            <input type='text' id='bic' className='campo' name='bic' required></input>

            <label className='etiqueta'>Pasaporte</label>
            <input type='text' id='pasaporte' className='campo' name='pasaporte' required></input>

            <label className='etiqueta'>Tarjeta</label>
            <input type='number' id='tarjeta' className='campo' name='tarjeta' required></input>
            
            <label className='etiqueta'>Fecha de expiracion</label>
            <input type='month' id='expiracion' className='campo' name='tarjeta_fecha' required></input>
            
            <label className='etiqueta'>CVC</label>
            <input type='text' minLength='3' maxLength='3' pattern='[0-9]{3}' id='cvc' className='campo' name='tarjeta_cvc' placeholder='000' required></input>

            <button type='submit' className='btn'>Enviar</button>
        </form>
    </>
};