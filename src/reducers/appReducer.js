const appReducer = function(state = { loggedInUser: {} }, action)
{
    switch(action.type)
    {
        case 'setLoggedInUser':
            let newLoggedUser = action.payload;
            return {...state, loggedInUser: newLoggedUser}
        case 'getLoggedInUser' :
            return {...state, loggedInUser: {}};

        default: 
            return state;
    }   

}

export default appReducer;