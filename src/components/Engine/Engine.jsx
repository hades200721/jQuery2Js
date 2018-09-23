import React from "react";
import LeftBar from './LeftBar/LeftBar';
import Jqueryinput from './jQueryInput/jQueryInput';
import Jsoutput from './jsOutput/jsOutput';
import styles from './engine.scss';

export default class Engine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: true,
			textOutput: '',
			aceOptions: {},
            customFunction: {}
		};
	}

	changeView() {
		this.setState({
			opened: !this.state.opened
		});
	}

	setAceEditor(aceProp, aceValue) {
		this.setState({
			aceOptions: {
				prop: aceProp,
				value: aceValue
			},
            customFunction: null
		});
	}

    callbackFunction(customFunction) {
        this.setState({
            customFunction: {
            	name: customFunction.name,
				args: customFunction.args
			},
            aceOptions: null
        });
	}

	textChanged(val) {
		this.setState({
			textOutput: val
		});
	}

	render() {
		return <div className={'body-container user-select-none ' + (this.state.opened ? 'open' : 'closed')}>
			<LeftBar view={this.changeView.bind(this)}
					 customFunction={this.callbackFunction.bind(this)}
					 modifiedEditor={this.setAceEditor.bind(this)}></LeftBar>
			<Jqueryinput aceOptions={this.state.aceOptions} customFunction={this.state.customFunction}
						onTextChange={this.textChanged.bind(this)} />
			<Jsoutput aceOptions={this.state.aceOptions} customFunction={this.state.customFunction} output={this.state.textOutput} />
		</div>;
	}
}

