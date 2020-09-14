import { SET_FORM_STATES } from '../action-types'

const initialState = {
    formStates: {
        breakfastState: 'fit',
        lunchState: 'fit',
        dinnerState: 'fit',
        snacksState: 'none',
        trainingState: 'none'
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FORM_STATES: {
            const { content } = action.payload
            return {
                ...state,
                formStates: content
            }
        }
        default:
            return state
    }
}