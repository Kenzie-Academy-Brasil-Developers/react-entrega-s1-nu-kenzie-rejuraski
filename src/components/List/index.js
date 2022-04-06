import './index.css'
import Card from '../Card';
import { useState } from 'react';

const List = (props) => {
    const [type, setType] = useState('all');

    const deleteAction = (action) => {
        props.setListTransactions(props.listTransactions.filter(t => t !== action));
    }

    return (
        <>
            <div className="list-container">
                <div className="filter-container">
                    <h3 className="font-title3 color-grey-4">Resumo Financeiro</h3>
                    <ul className="filter-button-container">
                        <li>
                            <button className={`filter-container button-secondary ${type === 'all' ? 'button-secondary--pink' : 'button-secondary--grey'}`} onClick={() => setType('all')}>Todos</button>
                        </li>
                        <li>
                            <button className={`filter-container button-secondary ${type === 'entrada' ? 'button-secondary--pink' : 'button-secondary--grey'}`} onClick={() => setType('entrada')}>Entradas</button>
                        </li>
                        <li>
                            <button className={`filter-container button-secondary ${type === 'saida' ? 'button-secondary--pink' : 'button-secondary--grey'}`} onClick={() => setType('saida')}>Despesas</button>
                        </li>
                    </ul>
                </div>
                {
                    props.listTransactions.length > 0
                        ?
                        <ul className="transaction-container">
                            {
                                props.listTransactions.filter(action => type !== 'all' ? action.type === type : true).map((action, index) => <Card key={index} action={action} deleteAction={deleteAction} />)
                            }
                        </ul>
                        :
                        <div className="clear-container">
                            <h2 className="font-title3 color-grey-3">Você ainda não possui nenhum lançamento</h2>
                            <ul className="transaction-container">
                                <li className="card-clear-container card-container--expense">
                                    <p className="line-top">_</p>
                                    <p className="line-bottom">_</p>
                                </li>
                                <li className="card-clear-container card-container--expense">
                                    <p className="line-top">_</p>
                                    <p className="line-bottom">_</p>
                                </li>
                                <li className="card-clear-container card-container--expense">
                                    <p className="line-top">_</p>
                                    <p className="line-bottom">_</p>
                                </li>
                            </ul>
                        </div>
                }
            </div>
        </>
    );
}

export default List;