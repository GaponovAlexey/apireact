import { Provider } from 'react-redux';

import store from './Redux/store';
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>hi</h1>
      </div>
    </Provider>
  );
}

export default App;
