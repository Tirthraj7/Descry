import * as serviceWorker from './serviceWorker'
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/storeConfig/store'
import { BrowserRouter } from 'react-router-dom'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {
  setLoginUser,
} from "./redux/actions/login/loginAction";

// import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/scss/style.scss'
import './assets/scss/responsive.scss'
import config from './config'
import ReduxToastr from 'react-redux-toastr'

import Spinner from './components/spinner/spinner'
import { history } from './history'
const LazyApp = lazy(() => import('./app/AppRouter'))

const jsx = (
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
      </Suspense>
    </BrowserRouter>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position='top-right'
      getState={state => state.toastr} // This is the default
      transitionIn='fadeIn'
      transitionOut='fadeOut'
      progressBar
      closeOnToastrClick
    />
  </Provider>
)
let hasRendered = false;
// console.log("In Index");
//renderApp
const renderApp = async () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(jsx, document.getElementById('root'))
serviceWorker.unregister()

/**
 * @name renderLogin
 * @description To render login page/
 */
const renderLogin = () => {
  store.dispatch(setLoginUser(false));

  renderApp();

  if (
    window.location.pathname === "/") {
    history.push("/login");
  }
};


renderLogin();
serviceWorker.unregister();