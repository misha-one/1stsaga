import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import reducers from "../store/reducers";
import rootSaga from "../store/sagas";

import Home from "../pages/Home/Home";
import SelectedPicture from "../pages/SelectedPicture/SelectedPicture";

import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

import "../style/style.css";

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
      <BrowserRouter>
       <div>
         <Switch>
         <Route path="/:id" component={ SelectedPicture }/>
         <Route path="/" component={ Home }/>
         </Switch>
      </div>
    </BrowserRouter>
      </Provider>
    );
  }
}



export default App;
