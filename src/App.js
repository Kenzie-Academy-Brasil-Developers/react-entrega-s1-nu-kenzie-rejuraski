import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import defaultLogo from './assets/img/defaultLogo.svg';
import main from './assets/img/main.svg';
import secondaryLogo from './assets/img/secondaryLogo.svg';


function App() {
  const [begin, setBegin] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      {
        begin ?
          <main className="main-begin">
            <div className="center-container">
              <div className="left-container">
                <img className="logo-image" src={defaultLogo} alt="Logo da NuKenzie" />
                <h1 className="title font-title1 color-white">Centralize o controle das suas finanças</h1>
                <p className="font-headline color-white">de forma rápida e segura</p>
                <button className="button-begin button-secondary button-secondary--pink" onClick={() => setBegin(false)}>Iniciar</button>
              </div>
              <div className="right-container">
                <img className="main-image" src={main} alt="Combinação de imagens" />
              </div>
            </div>
          </main>
          :
          <div>
            <header className="header">
              <div className="header-container container">
                <img src={secondaryLogo} alt="Logo da NuKenzie" />
                <button className="button-secondary button-secondary--grey" onClick={() => setBegin(true)}>Inicio</button>
              </div>
            </header>
            <main className="main">
              <div className="main-container container">
                <div className="main-container--left">
                  <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
                  <TotalMoney listTransactions={listTransactions} />
                </div>
                <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
              </div>
            </main>
          </div>
      }
    </>
  );
}

export default App;