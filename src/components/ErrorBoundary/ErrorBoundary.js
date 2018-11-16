import React, { Component } from 'react';


class ErrorBoundary extends Component {
	componentName = 'error-boundary';

		state = {
		  hasError: false,
		};

		componentDidCatch(error, info) {
		  console.log('error: ', error);
		  console.log('info: ', info);
		  this.setState({ hasError: true });
		}

		render() {
		  if (this.state.hasError) {
		    return (
					<div className={this.block()}>
					In this place has error
					</div>
		    );
		  }
		  return this.props.children;
		}
}

export default ErrorBoundary;
