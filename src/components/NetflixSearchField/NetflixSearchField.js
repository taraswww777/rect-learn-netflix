import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './NetflixSearchField.scss'

class NetflixSearchField extends ComponentBEM {

	componentName = 'netflix-search-field';

	render() {
		return (
			<div className={this.block()}>
				<input
					type="text"
					className={this.elem('input')}
					placeholder={'search...'}
					onChange={(event) => {
						this.props.setSearchQuery(event.target.value);
					}}
					onKeyPress={(event) => {
						if (ComponentBEM.isKeyEnter(event)) {
							this.props.searchFilm();
						}
						return false;
					}}

				/>
			</div>
		);
	}
}

export default NetflixSearchField;