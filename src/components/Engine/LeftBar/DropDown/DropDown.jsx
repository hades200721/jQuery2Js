import React from "react";
import dropDownStyle from "./dropDown.scss";

const InputTypesObjects = {
    checkbox: { className: 'checkBox', type: 'checkbox'},
    dropDown: { className: 'dropDown', type: 'dropdown'},
    number: { className: 'textInput ml1', type: 'number'}
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
        let val = this.getValueAccordingInputType(e, e._targetInst.memoizedProps.type);
        this.props.toggleCheckbox(e._targetInst.memoizedProps.val, val, e._targetInst.memoizedProps.customfunction);
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
                let inputDom = this.buildInputElementAccordingType(i);
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
        return <div className={'dropDownSection ' + (this.state.optionsCollapse ? 'collapse' : '')}>
            <div className={'title ' + (this.state.optionsCollapse ? 'collapse' : '')}
                 onClick={() => this.toggleOptions()}>
                <div className="text">{this.props.title}</div>
                <svg className="arrow" viewBox="0 0 24 24">
                    <path d=" M15.41,16.58 L10.83,12 L15.41,7.41 L14,6 L8,12 L14,18 L15.41,16.58 Z"></path>
                </svg>
            </div>
            {options}
        </div>;
    }

    buildInputElementAccordingType(index) {
        let inputType = this.props.options[index].type || 'checkbox';
        let inputTypeObject = InputTypesObjects[inputType];
        switch (inputType) {
            case 'checkbox':
                return <div className="row" key={this.props.options[index].key}><label className="c-pointer">
                            <input type={inputTypeObject.type}
                                   className={inputTypeObject.className}
                                   label={this.props.options[index].label}
                                   customfunction={this.props.options[index].customFunction}
                                   checked={this.state.options[index].value}
                                   val={this.state.options[index].key}
                                   onChange={(event) => this.toggleCheckbox(event, index)}/>
                            {this.props.options[index].label}
                            </label>
                        </div>;
            case 'number':
                return <div className="row" key={this.props.options[index].key}>
                    <label className="ml2 pl1 c-pointer" htmlFor={this.props.options[index].key}> {this.props.options[index].label}
                    </label>
                    <input name={this.props.options[index].key}
                           type={inputTypeObject.type}
                           className={inputTypeObject.className}
                           label={this.props.options[index].label}
                           customfunction={this.props.options[index].customFunction}
                           value={this.state.options[index].value}
                           val={this.state.options[index].key}
                           onChange={(event) => this.toggleCheckbox(event, index)}/>

                </div>;
            case 'dropDown':
                return <div className="row" key={this.props.options[index].key}>
                    <label className="ml2 pl1 mr1 c-pointer" htmlFor={this.props.options[index].key}> {this.props.options[index].label}
                    </label>
                    <select name={this.props.options[index].key} value={this.state.options[index].value}
                            type={inputTypeObject.type}
                            val={this.state.options[index].key}
                            onChange={(event) => this.toggleCheckbox(event, index)}>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="tomorrow_night">Tomorrow Night</option>
                        <option value="monokai">Monokai</option>
                    </select>
                </div>
        }
    }

    getValueAccordingInputType(event, inputType) {
        switch (inputType) {
            case 'checkbox':
                return event.target.checked;
            case 'number' :
                return parseInt(event.target.value);
            case 'dropdown':
                return event.target.value;
        }
    }
}
