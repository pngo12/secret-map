import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer'
import App from './App'
import AdminPage from './components/admin/adminHome'
import Login from './components/login/login'
import CountryList from './components/dashboard/countryList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
  
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>

          <Route exact path='/' component={App} />
          <Route path='/admin' component={Login} />
          <Route path='/dashboard' component={AdminPage} />
          <Route path='/product' component={CountryList} />

        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
  