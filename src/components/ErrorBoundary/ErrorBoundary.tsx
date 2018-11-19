import React, {Component} from 'react';
import styled from "styled-components";

const BErrorBoundary = styled.div``;

class ErrorBoundary extends Component {

	public state = {
		errorMessage: null,
		hasError: false
	};

	public componentDidCatch(error: TypeError, info: object) {
		this.setState({hasError: true, errorMessage: error.message});
	}

	public render() {
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
