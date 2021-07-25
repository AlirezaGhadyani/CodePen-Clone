import React, { useContext, useEffect } from 'react';
import { GlobalState } from '../Context/GlobalContext';
import styled from 'styled-components';
import CodeEditor from './CodeEditor';
import useLocalStoreage from '../CostumHooks/useLocalStoreage';

// STYLES
const CodeEditorContainer = styled.section`
width: 1920px;
max-width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const TopSection = () => {
    const { set_g_Html, set_g_Css, set_g_Js } = useContext( GlobalState );
    const [html, setHtml] = useLocalStoreage( 'html', '' );
    const [css, setCss] = useLocalStoreage( 'css', '' );
    const [js, setJs] = useLocalStoreage( 'js', '' );

    useEffect( () => {
        set_g_Html( html );
        set_g_Css( css );
        set_g_Js( js );
    }, [html, css, js] );

    return (
        <CodeEditorContainer>
            <CodeEditor language="xml" onChange={setHtml} value={html} />
            <CodeEditor language="css" onChange={setCss} value={css} />
            <CodeEditor language="javascript" onChange={setJs} value={js} />
        </CodeEditorContainer>
    )
}

export default TopSection
