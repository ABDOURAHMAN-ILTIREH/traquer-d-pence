import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Transaction from './components/Transaction';
import { GlobalProvider } from './Context/GlobalTransaction';

function App() {
  return (
    < GlobalProvider className="App">
      <Header />
      <div className="App-Content">
      <div className="container">
      <Balance />
      <AddTransaction />
      </div>
      <div className="content-transaction">
      <Transaction />
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
