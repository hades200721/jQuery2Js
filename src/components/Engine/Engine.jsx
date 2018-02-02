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
			aceOptions: {}
		}
	}

	changeView() {
		this.setState({
			opened: !this.state.opened
		})
	}

	setAceEditor(aceProp, aceValue) {
		this.setState({
			aceOptions: {
				prop: aceProp,
				value: aceValue
			}
		});
	}

	textChanged(val) {
		this.setState({
			textOutput: val
		})
	}

	render() {
		return <div className={'body-container user-select-none ' + (this.state.opened ? 'open' : 'closed')}>
			<LeftBar view={this.changeView.bind(this)} modifiedEditor={this.setAceEditor.bind(this)}></LeftBar>
			<Jqueryinput aceOptions={this.state.aceOptions}
				onTextChange={this.textChanged.bind(this)} textVal={this.state.textOutput} />
			<Jsoutput output={this.state.textOutput} />
		</div>;
	}
}

