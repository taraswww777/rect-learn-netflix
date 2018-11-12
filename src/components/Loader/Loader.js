import React from 'react';
import './Loader.scss';
import logo from "../../logo.svg";
import ComponentBEM from "../ComponentBEM";

class Loader extends ComponentBEM {
	componentName = 'loader';

	render() {
		return (
			<div className={this.block()}>
				<img src={logo} className={this.elem('spin')} alt="loader" title={"Loading..."}/>
			</div>

		);
	}
}

export default Loader;
