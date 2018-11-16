import React, { Component } from 'react';


class Exception404 extends Component {
	componentName = 'exception-404';

	render() {
	  return (
			<div className={this.block()}>
				<h1>404 page note found</h1>
			</div>
	  );
	}
}

export default Exception404;
