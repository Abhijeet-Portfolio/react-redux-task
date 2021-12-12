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