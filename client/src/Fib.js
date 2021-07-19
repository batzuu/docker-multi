import React , { Component } from 'react'
import axios from 'axios';

class Fib extends Component {
	state = {
		seenIndexes: [],
		values: {},
		index: ''
	};

	componentDidMount() {
		this.fetcchValues();
		this.fetchIndexes();
	}

	async fetcchValues() {
		const values = await axios.get('/api/values/current');
		this.setState({ values: values.data });
	}
	async fetchIndexes() {
		const seenIndexes = await axios.get('/api/values/all');
		this.setState({ seenIndexes: seenIndexes.data });
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		await axios.post('api/values', {
			index: this.state.index
		});
		this.setState({ index: ''});
	}

	renderSeenIndexes() {
		console.log(this.state.seenIndexes.map(({ number }) => number).join(', '))
		return this.state.seenIndexes.map(({ number }) => number).join(', ');
	}

	renderValues() {
		const arr = [];

		for (let key in this.state.values) {
			arr.push(
				<div key={key}>
					For index {key} Fib no. is {this.state.values[key]}
				</div>
			)
		}
		return arr;
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Enter index:</label>
					<input 
						value={this.state.index}
						onChange={event => this.setState({ index: event.target.value })}
					/>
					<button>Submit</button>
				</form>
				<h3>Indexes already seen:</h3>
				{this.renderSeenIndexes()}
				<h3>Values calculated:</h3>
				{this.renderValues()}
			</div>
		)
	}
}

export default Fib;