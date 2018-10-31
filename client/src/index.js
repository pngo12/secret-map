import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer'
import App from './App';
import ProductCRUD from './components/admin/productCRUD';
import GetProducts from './components/admin/getProducts'
import CountryCRUD from '../src/components/admin/countryCRUD';
import AdminMap from '../src/components/admin/map';
import GetCountry from '../src/components/admin/getCountry';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={App} />
        <Route path='/dashboard' component={GetProducts} />
        <Route path='/productcrud' component={ProductCRUD} />
        <Route path='/getcountry' component={GetCountry} />
        <Route path='/countrycrud' component={CountryCRUD} />
        <Route path='/adminMap' component={AdminMap} />

      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
