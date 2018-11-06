import {Component} from 'react';

class ComponentBEM extends Component {

    componentName = 'ComponentCustom';

    block(mod = '', modValue = '') {
        let className = this.componentName;

        if (mod !== '') {
            className += ' ' + this.componentName + '--' + mod;
            if (modValue !== '') {
                className += '_' + modValue;
            }
        }

        return className;
    }

    elem(nameElement, mod = '', modValue = '') {
        let className = this.componentName + '__' + nameElement;

        if (mod !== '') {
            className += ' ' + this.componentName + '__' + nameElement + '--' + mod;
            if (modValue !== '') {
                className += '_' + modValue;
            }
        }
        return className;

    }

}

export default ComponentBEM;