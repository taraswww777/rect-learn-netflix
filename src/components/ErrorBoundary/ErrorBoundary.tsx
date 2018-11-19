import React, {Component} from 'react';
import styled from "styled-components";

const BErrorBoundary = styled.div``;

class ErrorBoundary extends Component {


	state = {
		hasError: false,
		errorMessage: null
	};

	componentDidCatch(error: TypeError, info: Object) {
		this.setState({hasError: true, errorMessage: error.message});
	}

	render() {
		if (this.state.hasError) {
			return (
				<BErrorBoundary>
					In this place has error. "{this.state.errorMessage}"
				</BErrorBoundary>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
