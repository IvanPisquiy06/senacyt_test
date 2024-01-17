import './Message.css';

export default function Message(props){

    const showPopUp = () => {
        props.view(false);
    }

    return <div className='popUp'>
    <h2 className='popUpTitle'>{props.message}</h2>
    <div className='btns'>
        <button className='confirm btn' onClick={showPopUp}>Ok</button>
    </div>
</div>
}