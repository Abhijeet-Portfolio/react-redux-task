export const fetchUsers = () => {
    return async function (dispatch) {
        const response = await fetch('https://dummyapi.io/data/v1/user?limit=50', {
            method: 'GET',
            headers: {
                'app-id': '61b2f57263e10a2ded10958f'
            }
        });
        const data = await response.json();
        dispatch(setUsers(data.data));
    }
}

export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}

export const fetchPosts = () => {
    return async function (dispatch) {
        const response = await fetch('https://dummyapi.io/data/v1/post?limit=100', {
            method: 'GET',
            headers: {
                'app-id': '61b2f57263e10a2ded10958f'
            }
        });
        const data = await response.json();
        dispatch(setPosts(data.data));
    }
}

export const setPosts = posts => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const tagName = value => {
    return {
        type: 'TAG',
        payload: value
    }
}