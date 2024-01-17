import './Popup.css';

export default function Popup(props){

    const showPopUp = () => {
        props.view(false);
    }

    function findUser(){
        const id = props.id;

        const url = 'https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items/' + id;

        fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('GET request successful:', data);
            deleteData();
        })
        .catch(error => {
            props.view(false);
            props.messagePopUp(true);
            props.message(1);
            console.error('Error during GET request:', error);
        });
    }

    function deleteData(){

        const id = props.id;

        const url = 'https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items/' + id;

        fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', 
        },
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('DELETE request successful:', data);
            props.view(false);
            props.messagePopUp(true);
            props.message(0);
        })
        .catch(error => {
            console.error('Error during DELETE request:', error);
        });

    }

    return <div className='popUp'>
        <h2 className='popUpTitle'>¿Está segur@ de eliminar al usuario con ID: {props.id}?</h2>
        <div className='btns'>
            <button className='confirm btn' onClick={findUser}>Sí</button>
            <button className='close btn' onClick={showPopUp}>No</button>
        </div>
    </div>
}