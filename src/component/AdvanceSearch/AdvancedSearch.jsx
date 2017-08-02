import React, { Component } from "react";
import './AdvancedSearch.css'
import MultipleSelect from '../MultipleSelect/MultipleSelect';

class AdvancedSearch extends Component {
    constructor(props) {
        super(props);
    }

    getStages = () => {
      return ["Closed Won", "Contract Negotiation", "Proposal componment", "item1", "item2", "item3"];
    };

    render() {
        return (
            <div className="search-pane">
                <div className="search-criterion">
                    <div className="criterion-details" id="keyword">
                        <div className="text-left search-item"><span className="criterion-fields-set">Keywords</span></div>
                        <div className="text-left"><input className="stage-option form-input"
                                                      placeholder="Opportunity, Account name" title=""/><span
                            className="validationMessage"></span></div>
                    </div>
                    <div id="more-criteria">
                        <div id="more-criteria-title"><span className="icon-display"><i
                            className="fa fa-caret-down"></i><i
                            className="fa fa-caret-right"></i></span>More Criteria
                        </div>
                        <div id="more-criteria-detail">
                            <div className="criterion-details">
                                <div className="criterion-title"><span className="criterion-fields-set">Stage</span></div>
                                <MultipleSelect items={this.getStages()} placeholder="please select"/>
                            </div>
                            <div className="criterion-details">
                                <div className="criterion-title"><span className="criterion-fields-set">Probability</span></div>
                                <div className="expand-container">
                                    <div className="probability-container"><span className="percentage-sign"><input
                                        className="numeric form-input" id="min-prob" maxLength="3"/></span><span>&nbsp;
                                        To&nbsp;</span><span className="percentage-sign"><input className="numeric form-input"
                                                                                            id="max-prob" maxLength="3"/></span>
                                    </div>
                                    <span className="validation-message"></span></div>
                            </div>
                            <div className="criterion-details">
                                <div className="criterion-title"><span
                                    className="criterion-fields-set">Start Date / End Date</span></div>
                                <div className="expand-container">
                                    <div className="date-input-line">
                                    </div>
                                    <span className="validation-message"></span></div>
                            </div>
                            <div className="criterion-details">
                                <div className="criterion-title"><span
                                    className="criterion-fields-set">Supervising Region</span></div>
                                <div className="expand-container">
                                    <div className="multiple-checkbox-container">
                                        <div className="region-button-dropbox">
                                            <button className="dropbox-button region-button">
                                                <span className="stage-icon"><span
                                                    >select region(s)</span></span></button>
                                            <div className="multiple-checkbox-dropbox region-dropbox">
                                                <ul>
                                                    <li><label><input className="stage-option" type="checkbox" value="Australia" title=""/><span
                                                        className="validationMessage"></span><span >Australia</span></label></li>
                                                    <li><label><input className="stage-option" type="checkbox" value="Brazil" title=""/><span
                                                        className="validationMessage"></span><span >Brazil</span></label></li>
                                                    <li><label><input className="stage-option" type="checkbox" value="Canada" title=""/><span
                                                        className="validationMessage"></span><span >Canada</span></label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="validation-message"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-bottom">
                    <button className="btn btn-success">SEARCH</button>
                </div>
            </div>
        );
    }
}
export default AdvancedSearch;