import './index.css';
import { useState } from "react";

const Form = (props) => {
    const initialState = {
        type: 'entrada',
        value: '',
        description: ''
    };

    const [action, setAction] = useState(initialState);

    const handleChange = (e) => {
        setAction({ ...action, [e.target.name]: e.target.value });
    }

    const handleBlur = () => {
        if (action.value) {
            if (action.type === 'entrada') {
                setAction({ ...action, value: Math.abs(action.value) });
            } else {
                setAction({ ...action, value: -Math.abs(action.value) });
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setListTransactions([...props.listTransactions, action]);
        setAction(initialState);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                <label className="font-body color-grey-4">Descrição</label>
                <input className="input font-headline color-grey-3" name="description" value={action.description} onChange={handleChange} type="text" required />
                <p className="font-body color-grey-3">Ex: Compra de roupas</p>
            </fieldset>
            <div className="form-row">
                <fieldset className="fieldset">
                    <label className="font-body color-grey-4">Valor</label>
                    <div className="input-container">
                        <input className="input font-headline color-grey-3" name="value" value={action.value} onChange={handleChange} onBlur={handleBlur} type="number" required />
                        <p className="input-suffix font-headline color-grey-3">R$</p>
                    </div>
                </fieldset>
                <fieldset className="fieldset">
                    <label className="font-body color-grey-4">Tipo do valor</label>
                    <select className="select font-headline color-grey-3" name="type" value={action.type} onChange={handleChange} onBlur={handleBlur} required>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Despesa</option>
                    </select>
                </fieldset>
            </div>
            <button className="button-secondary button-secondary--pink font-button">Inserir valor</button>
        </form>
    )
}

export default Form;