import React, {Component} from 'react'
import { connect } from 'react-redux';
import BugItem from './BugItem';

import createBugActions  from './actions/createBugActions';

class BugTracker extends Component{
	onCreateClick(){
		this.props.createNew(this.refs.txtBugName.value);
	}

	render(){
		console.log(this.props);
		var bugs = this.props.bugs;

		var bugItems = bugs.map(bug => (
			<BugItem data={bug} key={bug.id} toggle={this.props.toggle}></BugItem>
		));

		return (
			<div>
				<section className="stats">
					<span className="closed">2</span>
					<span> / </span>
					<span>{bugs.length}</span>
				</section>
				<section className="edit">
					<label htmlFor="">Bug Name :</label>
					<input type="text" ref="txtBugName" />
					<input type="button" value="Create" onClick={this.onCreateClick.bind(this)} />
				</section>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" />
				</section>
			</div>
		)
	}
}
export default connect((state) => {
			return {
				bugs : state.bugs
			}
		}, createBugActions)(BugTracker);


	