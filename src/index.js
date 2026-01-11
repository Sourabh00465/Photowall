import React from "react";
import { createRoot } from "react-dom/client"; // React 18 rendering API
// import Main from "./components/Main";
import './style/stylesheet.css';
// import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './redux/reducer';
import { Provider } from "react-redux";
import App from "./components/app";
// import { thunk } from "redux-thunk";


const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})



const root = createRoot(document.getElementById("root"));
root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);

