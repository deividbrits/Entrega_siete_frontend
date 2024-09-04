const reducer = (globalState, action) => {
    switch(action.type) {
        case 'GET_ALL_MANGAS':
            return {
                ...globalState,
                mangas: action.payload
            }
        default:
            return globalState
    }
}

export default reducer