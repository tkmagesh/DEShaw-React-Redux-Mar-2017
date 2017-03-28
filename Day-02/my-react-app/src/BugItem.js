import React , { Component } from 'react';

class BugItem extends Component{
	onBugClick(){
		this.props.toggle(this.props.data);
	}
	render(){
		console.log("In BugItem, props -> ", this.props);

		var bug = this.props.data;
		var bugNameItem = bug.isClosed ? 
			(<span className="bugname closed" onClick={this.onBugClick.bind(this)}>{bug.name}</span>)
			:
			(<span className="bugname" onClick={this.onBugClick.bind(this)}>{bug.name}</span>);

		return (
			<li>
				{bugNameItem}
				<div>[{bug.isClosed.toString()}]</div>
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
			);
	}
}
export default BugItem;