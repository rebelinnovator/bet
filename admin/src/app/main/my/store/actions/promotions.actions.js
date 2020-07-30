import api from 'app/ApiConfig.js'

export const GET_PROMOTION = '[MY APP PROMOTION] GET PROMOTION'
export const ACCEPT_PROMOTION = '[[MY APP PROMOTION] ACCEPT PROMOTION'
export const SUBMIT_PROMOTION_BALANCE = '[MY APP PROMOTION] SUBMIT PROMOTION'

export function getPromotion(params){
    console.log("action")
    console.log(params)
    const request = api.get('/promotion',{params})

    return dispatch=>
        request.then(response=>{
            console.log(response)
            dispatch({
                type:GET_PROMOTION,
                data:response.data
            })
        })
}
export function acceptPromotion(params){
    const request  = api.post('/promotion/accept',{params})

    return dispatch=>
        request.then(response=>{
           // if(response.data.result == 'success'){
                dispatch({
                    type:ACCEPT_PROMOTION,
                    data:response.data
                })
            //}
        }) 
}
export function submitPromotionBalance(param){

    const request = api.post('/promotion/submitbonus',{param})
    return dispatch=>
        request.then(response=>{
            dispatch({
                type:SUBMIT_PROMOTION_BALANCE,
                data:response.data
            })
        })
}