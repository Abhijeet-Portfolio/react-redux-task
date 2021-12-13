const initialState = {
    array: []
}

const postReducer = ( state = initialState, action) => {
    switch(action.type) {
        case 'SET_POSTS':
            return {
                array: action.payload
            }
        case 'TAG':
            const tagData = state.array.filter(element => {
                if(element.tags.includes(action.payload)) return true
                else return false
            });
            return {
                array: tagData
            };
        default:
            return state;
    }
}

export default postReducer;