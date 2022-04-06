import './index.css'

const TotalMoney = (props) => {
    const total = () => {
        const value = props.listTransactions.reduce((total, action) => total += parseInt(action.value), 0);
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }

    return (
        <div className="total-container">
            <div className="total-description-container">
                <p className="total-title font-title3 color-grey-4">Valor total:</p>
                <p className="total-description font-body color-grey-3">O valor se refere ao saldo</p>
            </div>
            <p className="font-title3 color-primary">{total()}</p>
        </div>
    );
}

export default TotalMoney;