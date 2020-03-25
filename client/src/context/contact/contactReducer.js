import { ADD_CONTACT,
  DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT,FILTER_CONTACTS, CLEAR_FILTER, 
  UPDATE_CONTACT,CONTACT_ERROR, GET_CONTACTS, CLEAR_CONTACTS
 } from '../types'

export default (state, action)=>{
	switch(action.type){
		case ADD_CONTACT:
			return{
				...state,
				contacts:[action.payload, ...state.contacts],
				loading:false
			}
		case GET_CONTACTS:
		return{
			...state,
			contacts:action.payload,
			loading:false
		}
		case CLEAR_CONTACTS:
			return{
				...state,
				contacts:[],
				current:null,
				filtered:null,
				loading:true,
				error:null,
			}
		case UPDATE_CONTACT:
			return{
				...state,
				contacts: state.contacts.map(contact=> contact._id === action.payload._id ? action.payload : contact ),
				loading:false
			}
		case DELETE_CONTACT:
			return{
				...state,
				contacts:state.contacts.filter(contact=>contact._id !== action.payload),
				loading:false
			}
		case SET_CURRENT:
			return{
				...state,
				current:action.payload
			}

		case CLEAR_CURRENT:
			return {
				...state,
				current:null
			}
		case CLEAR_FILTER:
			return {
				...state,
				filtered:null
			}
			
		case FILTER_CONTACTS:
			return {
				...state,
				filtered:state.contacts.filter(contact=>{
					const regexp = new RegExp(String(action.payload), 'gi')
					return contact.name.match(regexp) || contact.email.match(regexp)
				})
			}
		case CONTACT_ERROR:
			return {
				...state,
				error:action.payload
			}
		default:
			return state
	}
}