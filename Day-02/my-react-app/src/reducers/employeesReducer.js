export default function employeesReducer(currentState = [], action){
	switch (action.type){
		case 'ADD_NEW_EMP' :
			return currentState.concat([action.payload.empname]);
			
		default :
			return currentState;
	}
}