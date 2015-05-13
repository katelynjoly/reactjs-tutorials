/** @jsx React.DOM */

var TaskApp = React.createClass({

	getInitialState: function() {

		return {
			items: [
				'Grocery Shopping',
				'Get a Thing'
			],
			task: ''
		}

	},

	onChange: function(e) {

		this.setState({ task: e.target.value });

	},

	addTask: function(e) {

		this.setState({
			items: this.state.items.concat([this.state.task]),
			task: ''
		});

		e.preventDefault();

	},

	render: function() {

		return (
			<div>
				<h1>My Tasks</h1>
				<TaskList items={this.state.items} />

				<form onSubmit={this.addTask}>
					<input onChange={this.onChange} value={this.state.task}/>
					<button>Add Task</button>
				</form>
			</div>
		);
	}

});


React.render(<TaskApp />, document.body);