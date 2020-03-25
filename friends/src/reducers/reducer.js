import { GET_DATA, UPDATING, NEW_FRIEND, UPDATING_DATA } from "../actions/actions";


const initialState = {
    friends: [],
};

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
            }
        case UPDATING_DATA:
            return {
                ...state,
                friends: action.payload
            }
        case NEW_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        default: 
            return {
                ...state
            }
    }
}