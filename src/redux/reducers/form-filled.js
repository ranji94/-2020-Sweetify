import { SET_FORM_FILLED } from '../action-types'

const initialState = {
    formFilled: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FORM_FILLED: {
            const { content } = action.payload
            return {
                ...state,
                formFilled: content
            }
        }
        default:
            return state
    }
}