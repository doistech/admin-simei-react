import Menu from './components/Menu/Menu';
import Cards from './components/Home/Cards';
import './App.css';
import Sejabemvindo from './components/Home/Sejabemvindo';
import Info from './components/Home/Info';
import Footer from './components/Footer';





function App() {
  return (
    <div>
     <Menu/>
     <Sejabemvindo/>
     <Cards/>
     <Info/>
     <Footer/>
    </div>
    
    
  );
}

export default App;
