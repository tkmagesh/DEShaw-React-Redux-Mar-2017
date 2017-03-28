export default function createBugActions(dispatch){
			return {
				createNew : function(bugName){
					var newBugAction = {
						type : 'ADD_NEW',
						payload : {
							bugName : bugName
						}
					};
					dispatch(newBugAction)
				},
				toggle : function(bug){
					var toggleBugAction = {
						type : 'TOGGLE',
						payload : bug
					};
					dispatch(toggleBugAction);
				}
			}
		}