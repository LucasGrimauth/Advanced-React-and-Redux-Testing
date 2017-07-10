import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	constructor(props){
		super(props);

		this.state = {comment: ''};
	}

	handleChange(event){
		this.setState({ comment: event.target.value })
	}

	handleSubmit(event){
		event.preventDefault();

		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' })
	}

	render(){
		return(
			<div className="comment-box" >
				<h4>Add a Comment</h4>
				<form onSubmit={this.handleSubmit.bind(this)} >
					<textarea 
						placeholder="Add comment here" 
						value={this.state.comment} 
						onChange={this.handleChange.bind(this)} />
					<div><button type="submit">Submit comment</button></div>
				</form>
			</div>
		);
	}

}

export default connect(null, actions)(CommentBox);