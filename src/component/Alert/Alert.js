import React from 'react';
import template from './Alert.jsx';

class Alert extends React.Component {
    render() {
        return template.call(this, this.props.name);
    }
}


Alert.propTypes = {
    name: React.PropTypes.string,
};

Alert.defaultProps = {
    placeholder: 'please enter to search...',
    name: '',
};

export default Alert;
