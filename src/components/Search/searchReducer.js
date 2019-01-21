const INITIAL_STATE = { submited: false, details: {}, infos: {}, chart: [], news: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SYMBOL_SUBMITED':
            return { ...state, submited: action.payload }
        case 'SYMBOL_SEARCHED':
            return { ...state, infos: action.payload }        
        case 'COMPANY_SEARCHED':
            return { ...state, details: action.payload }
        case 'CHART_LOADED':
            return { ...state, chart: action.payload }
        case 'COMPANY_NEWS':
            return { ...state, news: action.payload }
        default:
            return state
    }
}