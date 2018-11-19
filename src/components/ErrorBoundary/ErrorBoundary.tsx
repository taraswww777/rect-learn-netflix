import React, {Component} from 'react';
import styled from "styled-components";

interface ErrorBoundaryProps {
	hasError: boolean;
	error: TypeError | null;
	info: Object | null;
}

const BErrorBoundary = styled.div``;

class ErrorBoundary extends Component <ErrorBoundaryProps> {


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
