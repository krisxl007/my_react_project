import { FETCH_COMMENTS } from '@/actions/actionTypes'

const initialState = {
    comments: []
}

const fetchCommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
};

export default fetchCommentsReducer;