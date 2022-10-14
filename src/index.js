import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,  Route,  Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CadastroDeProduto from './components/CadastroDeProduto';
import ComposicaoDoProdutos from './components/ComposicaoDoProduto';
import PedidosConcluidos from './components/PedidosConcluidos';
import PedidosEmAberto from './components/PedidosEmAberto';
import RealizarPedidos from './components/RealizarPedidos';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clientes from './components/Clientes/Clientes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Router>
  <Routes>
  <Route exact path='/' element={<App/>}></Route>
  <Route path='/Clientes' element={<Clientes/>}></Route>
  <Route path='/CadastroDeProduto' element={<CadastroDeProduto/>}></Route>
  <Route path='/ComposicaoDoProdutos' element={<ComposicaoDoProdutos/>}></Route>
  <Route path='/PedidosConcluidos' element={<PedidosConcluidos/>}></Route>
  <Route path='/PedidosEmAberto' element={<PedidosEmAberto/>}></Route>
  <Route path='/RealizarPedidos' element={<RealizarPedidos/>}></Route>
  </Routes>
  </Router>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
