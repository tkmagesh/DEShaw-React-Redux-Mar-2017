export default function bugsReducer(currentState = [], action){
			switch (action.type){
				case 'ADD_NEW' :
					let newId = currentState.length ? currentState.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1 : 1;
					let newBug = {
						id : newId,
						name : action.payload.bugName,
						isClosed : false,
						createdAt : new Date()
					};
					return currentState.concat([newBug]);
					
				case 'TOGGLE':
					var bugToToggle = action.payload;
					var toggledBug = {
						id : bugToToggle.id,
						name : bugToToggle.name,
						isClosed : !bugToToggle.isClosed,
						createdAt : bugToToggle.createdAt
					};
					return currentState.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
					
				default :
					return currentState;
			}
		}