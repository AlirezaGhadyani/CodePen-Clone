import React, { createContext, useReducer, useEffect } from 'react';
import ContextReducer from './ContextReducer';

const initialState = {
    html: '',
    css: '',
    js: '',
}

export const GlobalState = createContext( initialState );

export const GlobalProvider = ( props ) => {
    const [state, dispatch] = useReducer( ContextReducer, initialState );

    // ACTIONS
    const set_g_Html = ( html ) => {
        dispatch( { type: "SET_HTML", payload: html } );
    }

    const set_g_Css = ( css ) => {
        dispatch( { type: "SET_CSS", payload: css } );
    }

    const set_g_Js = ( js ) => {
        dispatch( { type: "SET_JS", payload: js } );
    }

    return (
        <GlobalState.Provider value={{
            html: state.html,
            css: state.css,
            js: state.js,
            set_g_Html,
            set_g_Css,
            set_g_Js
        }}>
            {props.children}
        </GlobalState.Provider>
    );
}