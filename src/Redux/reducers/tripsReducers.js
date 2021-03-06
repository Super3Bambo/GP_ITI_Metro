const tripReducer = (state={},action)=>
{
    switch(action.type)
    {
        case 'ADD_TRIP':
            return {...state,trip:action.payload}
            
        case 'CLEAR_TRIP':
            return {...state,trip:action.payload}
            
        case 'WAITING_TRIP':
            return {...state,pendingtrips:action.payload}

        case 'CLEAR_USER_TRIPS':
            return {...state,usertrips:action.payload}

        case 'CLEAR_WAITING_TRIPS':
            return {...state,pendingtrips:action.payload}

        case 'USER_TRIP':
            return {...state,usertrips:action.payload}

        case 'TRIP_PRICE':
            return {...state,tripPrice:action.payload}

        default:{return state}
    }

}
export default tripReducer;