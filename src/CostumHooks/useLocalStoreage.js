import React, { useState, useEffect } from 'react';

const getValueFromLocalStoreage = ( key, initialValue ) => {
    const localStorageData = JSON.parse( localStorage.getItem( key ) );

    if ( localStorageData != null ) return localStorageData;

    if ( initialValue === 'function' ) {
        return initialValue()
    }
    else {
        return initialValue
    }
}

const useLocalStoreage = ( key, initialValue ) => {
    const [value, setValue] = useState( () => {
        return getValueFromLocalStoreage( key, initialValue )
    } );

    useEffect( () => {
        localStorage.setItem( key, JSON.stringify( value ) );
    }, [value] )

    return [value, setValue]
}

export default useLocalStoreage;