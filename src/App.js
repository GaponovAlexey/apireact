import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Navbar from './pages/Navbar/Navbar';
import PageThree from './pages/pagethre';
import PageTwo from './pages/pagetwo';
import { Counter } from './features/counter/Counter';
import OneConteiner from './pages/OneConteiner';


function Rout() {
  return (
    <Router>
      <div className='app-Wrapper'>
        <Header />
        <Navbar />
        <div className='app-Wrapper-Content' >
          <Route path='/pageone' component={ OneConteiner } />
          <Route path='/pagetwo' component={ PageTwo } />
          <Route path='/pagethree' component={ PageThree } />
          <Route path='/Counter' component={ Counter } />
        </div>
      </div>
    </Router>
  );
}




function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Rout />
      </div>
    </Provider>
  );
}

export default App;
