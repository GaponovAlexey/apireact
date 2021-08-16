import React from 'react';
import { connect, Provider } from 'react-redux';
import store from './Redux/store';
import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Navbar from './pages/Navbar/Navbar';
import PageThree from './pages/pagethre';
import { Counter } from './features/counter/Counter';
import OneConteiner from './pages/OneConteiner';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './superbase/Ayth';
import Account from './superbase/Account';

import './superbase/Sup.module.css';
import TwoConteiner from './pages/TwoConteiner';



let Rout = () => {
  return (
    <Router>
      <div className='app-Wrapper'>
        <Header isAuth={ Auth } login={ Account } />
        <Navbar />
        <div className='app-Wrapper-Content' >
          <Route path='/pageone' component={ OneConteiner } />
          <Route path='/pagetwo' component={ TwoConteiner } />
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


let App = () => {
  return (
    <React.Fragment>
      <BrowserRouter >
        <Provider className="App" store={ store } >
            <AppConteiner />
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  )
}

const AppConteiner = compose(withRouter(connect(mapStateToProps)((Rout))));
export default App;
