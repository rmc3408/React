import React, { Component } from 'react'

class ClassDidMountDidUnmout extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

	logMousePosition = e => {
		console.log('EVENT TRIGGERED called')
		this.setState({ x: e.clientX, y: e.clientY })
	}

	componentDidMount() {
		console.log('CLASS DID MOUNT')
		window.addEventListener('mousemove', this.logMousePosition)
	}

	componentWillUnmount() {
		console.log('CLASS UNMOUNT')
		window.removeEventListener('mousemove', this.logMousePosition)
	}

	render() {
		console.log('CLASS RENDER')
		return (
			<div>
				<h1>X - {this.state.x} Y - {this.state.y}</h1>
			</div>
		)
	}
}

export default ClassDidMountDidUnmout