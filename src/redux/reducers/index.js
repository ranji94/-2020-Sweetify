import { combineReducers } from 'redux'
import langCode from './lang-code'
import formStates from './form-states'
import formFilled from './form-filled'

export default combineReducers({ langCode, formStates, formFilled })