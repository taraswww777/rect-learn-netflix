import React from 'react';
import ComponentBEM from '../ComponentBEM.js';
import './NetflixSearchField.scss'

class NetflixSearchField extends ComponentBEM {

    componentName = 'netflix-search-field';

    render() {
        return (
            <div className={this.block()}>
                <input type="text" className={this.elem('input')}/>
            </div>
        );
    }
}

export default NetflixSearchField;