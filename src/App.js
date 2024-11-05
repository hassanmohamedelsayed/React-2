import { Fragment } from 'react';
import './App.css';
import Home from './component/HomePage/Home';
import Navas from './component/Navs/Navas';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Fragment>
    <Navas/>
    <Home/>
  

    </Fragment>
  );
}

export default App;
