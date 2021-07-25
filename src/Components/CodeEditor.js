import React, { useState } from 'react';
import styled from 'styled-components';
import { IoResize } from 'react-icons/io5';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';

// STYLES
const EditorWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
flex-grow: ${props => props.grow};
flex-basis: 0;
padding: 1rem 0.5rem;
& header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    color: #aaaebc;
    background: #1a1b1f;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem 0.5rem 0  0 ;
    & span{
        font-size: 1.8rem;
        font-weight: 700;
        user-select: none;
    }
    & button{
        background: transparent;
        border: 0;
        cursor: pointer;
        & svg{
            font-size: 1.4rem;
            color: #aaaebc;
        }
    }
}

& div{
    background: #1d1e22;
    color: #aaaebc;
    font-size: 1rem;
    font-family: 'Poppins';
    .CodeMirror-scroll{
        position: ${props => props.pos};
        overflow-x: hidden!important;
    }
    .CodeMirror-wrap{
        background: #1d1e22;
    }
    ::-webkit-scrollbar{
    width: 0px;
}
}
`;

const CodeEditor = ( { onChange, value, language } ) => {
    const [closeEditor, setCloseEditor] = useState( false );

    // HANDLE CHANGE EDITOR
    const handleChange = ( editor, data, value ) => {
        onChange( value )
    }

    return (
        <EditorWrapper grow={closeEditor ? '0' : '1'} pos={closeEditor ? 'absolute' : 'relative'}>
            <header>
                <span>{language === 'xml' ? 'html' : language === 'javascript' ? 'js' : language}</span>
                <button onClick={() => { setCloseEditor( p => !p ) }}>
                    <IoResize />
                </button>
            </header>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </EditorWrapper >
    )
}

export default CodeEditor;
