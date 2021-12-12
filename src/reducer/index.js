const initialState = {
    array: []
}

const dataReducer = ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS':
            return {
                array: action.payload
            }
        case '10':
            return {
                array: state.array.filter((element,key) => key < 10)
            }
        default:
            return state;
    }
}

export default dataReducer;