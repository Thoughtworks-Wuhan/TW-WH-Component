import React, { Component } from 'react';
import classNames from 'classnames/bind';
import scss from './MultipleSelect.css';

const cx = classNames.bind(scss);

class MultipleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false,
            placeholder: this.props.placeholder,
            items: [],
        };
    }

    hide = () => {
        this.setState({ switch: false });
    };

    toggle = () => {
        this.setState({ switch: !this.state.switch });
    };

    addItem = (e, item) => {
        const checked = e.target.checked;
        let items = this.state.items;
        if (checked) {
            items.push(item);
        } else {
            items = items.filter(data => item !== data);
        }
        const placeholder = items.join(',');
        this.setState({ items, placeholder });
    };

    render() {
        return (
            <div className={cx('multiple-checkbox-container')}>
                <button className={cx('multiple-button')} onClick={this.toggle}>
                    <span className="multiple-button-icon">{this.state.placeholder}</span>
                </button>
                <div className={cx('multiple-checkbox-dropbox', this.state.switch ? 'show' : 'hide')}>
                    <ul>
                        {
                            this.props.items.map((item, index) => (
                                <li key={`key-${index}`}>
                                    <label htmlFor={`item-${index}`}>
                                        <input type="checkbox" className="item-option" onClick={e => this.addItem(e, item)} id={`item-${index}`} />
                                        <span>{item}</span>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

MultipleSelect.propTypes = {
    placeholder: React.PropTypes.string,
    items: React.PropTypes.arrayOf.isRequired,
};

MultipleSelect.defaultProps = {
    placeholder: 'please enter to search...',
    items: [],
};

export default MultipleSelect;
