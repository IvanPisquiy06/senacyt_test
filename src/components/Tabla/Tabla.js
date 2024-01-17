import './Tabla.css';

export default function Tabla(props){
    const userData = props.data;

    if (!userData || userData.length === 0) {
        return <p>No data available</p>;
    }

    const columns = Object.keys(userData[0]);
    return <>
        <div className='cards'>
            {userData.map((user, rowIndex) => (
                <div className='card'>{
                    columns.map((column, colIndex) => (
                        <div className='card-group'>
                            <p className='title'>{column}</p>
                            <p className='info'>{user[column]}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </>
}