import { Provider } from 'react-redux';
import s from './App.css';
import store from './Redux/store';
import PageOne from './pages/pageone';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Navbar from './pages/Navbar/Navbar';


function Rout() {
  return (
    <Router>
      <div className='app-Wrapper'>
        <Header />
        <Navbar />
        <div className='app-Wrapper-Content' >
          <Route path='/pageone' component={ PageOne } />
          <Route path='/pageone' component={ PageOne } />
          <Route path='/pageone' component={ PageOne } />
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
