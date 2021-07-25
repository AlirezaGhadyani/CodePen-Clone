const ContextReducer = ( state, { type, payload } ) => {
    switch ( type ) {
        case "SET_HTML":
            return {
                ...state,
                html: payload
            };
        case "SET_CSS":
            return {
                ...state,
                css: payload
            };
        case "SET_JS":
            return {
                ...state,
                js: payload
            };
        default: return state
    }
}

export default ContextReducer;