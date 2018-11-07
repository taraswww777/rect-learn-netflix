import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './ErrorBoundary.scss';

class ErrorBoundary extends ComponentBEM {

	componentName = 'error-boundary';

		state = {
			hasError: false
	};

	componentDidCatch(error,info){
		console.log('error: ',error);
		console.log('info: ',info);
		this.setState({hasError: true});
	}

	render() {
		if (this.state.hasError) {

			return (
				<div className={this.block()}>
					In this place has error
				</div>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
