const INITIAL_STATE = { config: {} }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SHOW_ALERT':
            return { ...state, config: action.payload }        
        default:
            return state
    }
}