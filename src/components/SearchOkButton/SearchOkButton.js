import React, { Component } from 'react';
import { Button, listButtonStatus, listButtonTypes } from '../../components-styled/Button';

class SearchOkButton extends Component {
  render() {
    return (
			<Button
				status={listButtonStatus.active}
				type={listButtonTypes.big}
				onClick={this.props.onSearchFilm}>{
					this.props.children ? this.props.children : 'search'
				}</Button>
    );
  }
}

export default SearchOkButton;
