import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import reducers from "../store/reducers";
import rootSaga from "../store/sagas";

import { Home } from "../pages";

import "../style/style.css";

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faUser);

class App extends Component {
  render() {

    const rootReducer = (state, action) => {
      return reducers(state, action);
    };

    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const store = createStore(rootReducer, applyMiddleware(...middleware));

    sagaMiddleware.run(rootSaga);

    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;