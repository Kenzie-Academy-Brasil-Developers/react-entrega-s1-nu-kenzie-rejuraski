import './index.css'

const Card = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteAction(props.action);
    }

    return (
        <li className={`card-container ${props.action.type === 'entrada' ? 'card-container--entry' : 'card-container--expense'}`}>
            <div className="card-containter-description">
                <p className="font-title3 color-grey-4">{props.action.description}</p>
                <p className="font-body color-grey-3">{props.action.type === 'entrada' ? 'Entrada' : 'Despesa'}</p>
            </div>
            <p className="card-value font-body color-grey-4">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Math.abs(props.action.value))}</p>
            <button onClick={handleDelete} className="card-button-delete"></button>
        </li>
    )
}

export default Card;