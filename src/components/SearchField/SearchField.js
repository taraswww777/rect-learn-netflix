import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './SearchField.scss'

class SearchField extends ComponentBEM {

	componentName = 'search-field';

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
						if (this.isKeyEnter(event)) {
							this.props.searchFilm();
						}
						return false;
					}}

				/>
			</div>
		);
	}
}

export default SearchField;