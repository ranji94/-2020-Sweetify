import { SET_LANGCODE,
    SET_FORM_STATES,
    SET_FORM_FILLED } from './action-types'

export const setLangCode = (content) => {
    return {
        type: SET_LANGCODE,
        payload: {
            content
        }
    }
}

export const setFormStates = (content) => {
    return {
        type: SET_FORM_STATES,
        payload: {
            content
        }
    }
}

export const setFormFilled = (content) => {
    return {
        type: SET_FORM_FILLED,
        payload: {
            content
        }
    }
}