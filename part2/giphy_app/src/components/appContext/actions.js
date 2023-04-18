
export const useActions = (state, dispatch) => {
    //Create user method
    const createUser = (newUser) => {
        const newUsers = [...state.users];
        newUsers.push(newUser)
        console.log('state', state)
        dispatch({
            type: "ADD_USER",
            payload: newUsers
        })
    };

    // login method
    const login = (creds) => {
        const currentUser = state.user.find()
    }

    return {
        createUser
    }
}