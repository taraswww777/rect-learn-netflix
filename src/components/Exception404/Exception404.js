import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './Exception404.scss';

class Exception404 extends ComponentBEM {
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
