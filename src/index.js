import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configure_store";
import theRoutes from './router/router';
import Spinner from "./components/spinner";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const store = configureStore();

// toaster configuration
const toasterConfig = {
    timeOut: 1500,
    newestOnTop: true,
    position: 'top-right',
    transitionIn: 'bounceIn',
    transitionOut: 'bounceOut',
    progressBar: false,
    closeOnToastrClick: false,
}


ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <App>
                <Suspense fallback={ <Spinner/> }>
                    { theRoutes }
                </Suspense>
                <ReduxToastr
                    timeOut={ toasterConfig.timeOut }
                    newestOnTop={ toasterConfig.newestOnTop }
                    // preventDuplicates
                    position={ toasterConfig.position }
                    getState={(state) => state.toastr} // This is the default
                    transitionIn={ toasterConfig.transitionIn }
                    transitionOut={ toasterConfig.transitionOut }
                    progressBar={ toasterConfig.progressBar }
                    closeOnToastrClick={ toasterConfig.closeOnToastrClick }
                />
            </App>
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
