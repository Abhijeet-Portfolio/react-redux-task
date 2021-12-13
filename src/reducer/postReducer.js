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
                for(let i = 0; i < element.tags.length; i++) {
                    if(element.tags[i] === action.payload) return true;
                }
                return false;
            });
            return {
                array: tagData
            };
        default:
            return state;
    }
}

export default postReducer;