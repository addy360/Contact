import React , {useReducer} from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {
	SET_ALERT,
	REMOVE_ALERT
} from '../types'


const AlertState = props =>{
	const initialState = {
		alert:[]
	}
	const [state, dispatch] = useReducer(alertReducer, initialState)
	return(
		<AlertContext.Provider value={{
			alert:state.alert
		}}>
			{props.children}
		</AlertContext.Provider>
	)
}

export default AlertState