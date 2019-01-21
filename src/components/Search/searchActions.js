import axios from 'axios'

const baseURL = 'https://api.iextrading.com/1.0/'

export const getLatestPrice = symbol => {        
    return async (dispatch) => {
        await axios.get(`${baseURL}/stock/${symbol}/quote`)
            .then(resp => dispatch({ type: 'SYMBOL_SEARCHED', payload: resp.data }))                
            .then(resp => dispatch(getCompanyDetails(symbol)))
            .then(resp => dispatch(getChartData(symbol)))
            .then(resp => dispatch(getCompanyNews(symbol)))
            .catch(error => dispatch({ type: 'SHOW_ALERT', payload: {showAlert: true, typeAlert: 'error', titleAlert: 'Ocorreu um problema', messageAlert: 'Não foi possível obter a última cotação.'} }))
    }    
}

export const getCompanyDetails = symbol => {
    return async (dispatch) => {
        await axios.get(`${baseURL}/stock/${symbol}/company`)
            .then(resp => dispatch({ type: 'COMPANY_SEARCHED', payload: resp.data }))  
            .catch(error => dispatch({ type: 'SHOW_ALERT', payload: {showAlert: true, typeAlert: 'error', titleAlert: 'Ocorreu um problema', messageAlert: 'Não foi possível obter os dados da empresa.'} }))
    }      
}

export const getChartData = symbol => {
    return async (dispatch) => {
        await axios.get(`${baseURL}/stock/${symbol}/chart`)
            .then(resp => dispatch({ type: 'CHART_LOADED', payload: resp.data }))  
            .then(() => dispatch({ type: 'SYMBOL_SUBMITED', payload: true }))  
            .catch(error => dispatch({ type: 'SHOW_ALERT', payload: {showAlert: true, typeAlert: 'error', titleAlert: 'Ocorreu um problema', messageAlert: 'Não foi possível carregar os dados do gráfico.'} }))
    }      
}

export const getCompanyNews = symbol => {
    return async (dispatch) => {
        await axios.get(`${baseURL}/stock/${symbol}/news/last/1`)
            .then(resp => dispatch({ type: 'COMPANY_NEWS', payload: resp.data }))  
            .catch(error => dispatch({ type: 'SHOW_ALERT', payload: {showAlert: true, typeAlert: 'error', titleAlert: 'Ocorreu um problema', messageAlert: 'Não foi possível obter as notícias da empresa.'} }))
    }      
}