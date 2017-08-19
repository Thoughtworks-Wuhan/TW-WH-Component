import React, { Component } from "react";
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import service from './Service';
import { GetItems } from '../../redux/module/action';
import scss from './MultipleSelect.css'
const cx = classNames.bind(scss);

class MultipleSelectUseRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false,
            placeholder: this.props.placeholder,
            items: []
        };
    }

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        service.getItems().then(items => {
            // this.setState({items: items});
            this.props.GetItems(items);
        }).catch(error => {
            console.error(error);
        });
    };

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
            items = items.filter((data) => item !== data);
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
                            this.props.items && this.props.items.map((item, index) => {
                                return (
                                    <li key={`key1-${index}`}>
                                        <label htmlFor={`item1-${index}`}>
                                            <input type="checkbox" className="item-option"
                                                   onClick={e => this.addItem(e, item)}
                                                   id={`item1-${index}`}/>
                                            <span>{item}</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

MultipleSelectUseRedux.propTypes = {
    placeholder: React.PropTypes.string,
    items: React.PropTypes.array,
};

MultipleSelectUseRedux.defaultProps = {
    placeholder: 'please enter to search...'
};

const mapStateToProps = (state) => {
    const items = state.data.item;
    return Object.assign({ items });
};

export default connect(mapStateToProps, { GetItems })(MultipleSelectUseRedux);