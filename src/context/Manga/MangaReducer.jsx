const reducer = (globalState, action) => {
    switch(action.type) {
        case 'GET-ALL-MANGAS':
            return {
                ...globalState,
                manga: action.payload
            }
        default:
            return globalState
    }
}

export default reducer