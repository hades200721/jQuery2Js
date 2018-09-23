import React from "react";
import dropDownStyle from "./dropDown.scss";

const InputTypesObjects = {
    checkbox: { className: 'checkBox', type: 'checkbox'},
    dropDown: { className: 'dropDown', type: 'checkbox'},
    number: { className: 'textInput mr1', type: 'number'}
};

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            optionsCollapse: false,
            options: props.options
        };
    }

    toggleOptions() {
        this.setState(prevState => ({
            optionsCollapse: !prevState.optionsCollapse
        }));
    }

    toggleCheckbox(e, index) {
        let val = (e._targetInst.memoizedProps.type == 'checkbox') ? e.target.checked : parseInt(e.target.value);
        this.props.toggleCheckbox(e._targetInst.memoizedProps.val, val, e._targetInst.memoizedProps.customfunction);
        let newValue = this.state.options[index].value;
        let prevOptionsState = this.state.options;
        // new options state
        prevOptionsState[index].value = val;
        this.setState({
            options: prevOptionsState
        });
    }

    render() {
        let indents = [];
        if (this.props.options) {
            for (let i = 0; i < this.props.options.length; i++) {
                let inputType = this.props.options[i].type || 'checkbox';
                let inputTypeObject = InputTypesObjects[inputType];
                let inputDom =  <label className="c-pointer" key={this.props.options[i].key}>
                                <input type={inputTypeObject.type}
                                       className={inputTypeObject.className}
                                       label={this.props.options[i].label}
                                       customfunction={this.props.options[i].customFunction}
                                       checked={this.state.options[i].value}
                                       value={this.state.options[i].value}
                                       val={this.state.options[i].key}
                                       onChange={ (event) => this.toggleCheckbox(event, i) }/>
                                {this.props.options[i].label}
                                </label>
                indents.push(inputDom);
            }
        }
        let options = null;
        if (!this.state.optionsCollapse) {
            options = (
                <div className="options">
                    {indents}
                </div>
            );
        }
        return <div className={'dropDownSection ' + (this.state.optionsCollapse ? 'collapse' : '') }>
            <div className={'title ' + (this.state.optionsCollapse ? 'collapse' : '') } onClick={ () => this.toggleOptions() }>
                <div className="text">{this.props.title}</div>
                <svg className="arrow" viewBox="0 0 24 24">
                    <path d=" M15.41,16.58 L10.83,12 L15.41,7.41 L14,6 L8,12 L14,18 L15.41,16.58 Z"></path>
                </svg>
            </div>
            {options}
        </div>;
    }
}
