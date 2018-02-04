import React from "react";
import dropDownStyle from "./dropDown.scss";

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.state = {
            optionsCollapse: true,
        };
    }

    toggleOptions() {
        this.setState(prevState => ({
            optionsCollapse: !prevState.optionsCollapse
        }));
    };

    toggleCheckbox(e) {
        this.props.toogleCheckbox(e._targetInst.memoizedProps.val, e.target.checked);
    }

    render() {
        var indents = [];
        if (this.props.options) {
            for (var i = 0; i < this.props.options.length; i++) {
                indents.push(
                    <label className="c-pointer" key={this.props.options[i].key}>
                        <input type="checkbox" className="checkBox" label={this.props.options[i].label}
                               val={this.props.options[i].key} value="on" onChange={this.toggleCheckbox}/>
                        {this.props.options[i].label}
                    </label>);
            }
        }
        var options = null;
        if (this.state.optionsCollapse) {
            options = (
                <div className="options">
                    {indents}
                </div>
            );
        }
        return <div>
            <div className={'title ' + (this.state.optionsCollapse ? 'collapse' : '') } onClick={this.toggleOptions}>
                <div className="text">{this.props.title}</div>
                <svg className="arrow" viewBox="0 0 24 24">
                    <path d=" M15.41,16.58 L10.83,12 L15.41,7.41 L14,6 L8,12 L14,18 L15.41,16.58 Z"></path>
                </svg>
            </div>
            {options}
        </div>;
    }
}
