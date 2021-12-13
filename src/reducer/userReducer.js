const initialState = {
    array: []
}

const userReducer = ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS':
            return {
                array: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;