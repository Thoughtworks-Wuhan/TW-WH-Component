import React, { Component } from "react";
import './MultipleSelect.css'

class MultipleSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: false
        };
    }

    toggle = () => {
        this.setState({ switch: !this.state.switch });
    };

    render() {
        return (
            <div className="multiple-checkbox-container">
                <button className="multiple-button" onClick={this.toggle}>
                    <span className="multiple-button-icon">{this.props.placeholder}</span>
                </button>
                <div className="multiple-checkbox-dropbox">
                    <ul>
                        {
                            this.props.items.map((item, index) => {
                                return (
                                    <li key={`key-${index}`}>
                                        <label htmlFor={`item-${index}`}>
                                            <input type="checkbox" className="item-option"
                                                   id={`item-${index}`}/>
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

export default MultipleSelect;