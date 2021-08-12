import React from 'react';
import { connect, Provider } from 'react-redux';
import store from './Redux/store';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Navbar from './pages/Navbar/Navbar';
import PageThree from './pages/pagethre';
import PageTwo from './pages/pagetwo';
import { Counter } from './features/counter/Counter';
import OneConteiner from './pages/OneConteiner';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './superbase/Ayth';
import Account from './superbase/Account';

import './superbase/Sup.module.css';



let Rout = (props) => {
  return (
    <Router>
      <div className='app-Wrapper'>
        <Header isAuth={ Auth } login={ Account} />
        <Navbar />
        <div className='app-Wrapper-Content' >
          <Route path='/pageone' component={ OneConteiner } />
          <Route path='/pagetwo' component={ PageTwo } />
          <Route path='/pagethree' component={ PageThree } />
          <Route path='/Counter' component={ Counter } />
          <Route path='/login' component={ Auth } />
          <Route path='/Account' component={ Account } />
        </div>
      </div>
    </Router>
  );
}
let mapStateToProps = state => ({
  data: state.data.data
})


let App = (props) => {
  return (
    <Provider store={ store }>
      <div className="App">
        <AppConteiner />
      </div>
    </Provider>
  )
}

const AppConteiner = compose(withRouter(connect(mapStateToProps)((Rout))));
export default App;
