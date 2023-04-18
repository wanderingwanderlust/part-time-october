import React from "react";
import { useActions } from "./actions";

export const Store = React.createContext();

const initialState = {
    users: [
        {
            username: 'Greg',
            email: "test@test.com",
            password: "testtest"
        }
    ],
    currentUser: null
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD_USER":
            return {...state, users: action.payload}
        default:
            break;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);
    const value = { state, dispatch, actions };

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}

