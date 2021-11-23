import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {Provider as ReduxProvider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './config/redux/configureStore';
import {ThemeProvider} from "styled-components";
import theme from "../src/constants/theme";
const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </ReduxProvider>,
    document.getElementById('root'),
);

serviceWorker.register();
