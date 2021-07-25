import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../Context/GlobalContext';

// STYLES
const BottomSectionWindow = styled.iframe`
width: 1920px;
max-width: 100%;
height: 50vh;
border: 0;
background: #fff;
`;

const BotoomSection = () => {
    const { html, css, js } = useContext( GlobalState );
    const [srcDoc, setSrcDoc] = useState( '' );

    useEffect( () => {
        const timeOut = setTimeout( () => {
            setSrcDoc( `
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
            `);
        }, 450 );

        return () => clearInterval( timeOut );
    }, [html, css, js] );

    return (
        <BottomSectionWindow
            title="output"
            sandbox="allow-scripts"
            srcDoc={srcDoc}
        />
    )
}

export default BotoomSection
