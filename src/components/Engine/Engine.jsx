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
			textOutput: 'vv'
		}
	}	

	static getProps(stores, params) {
		return {
			// Fetch data here
		};
	}

	changeView() {
		this.setState({
			opened: !this.state.opened
		})
	}

	textChanged(val) {
		this.setState({
			textOutput: val
		})
	}

	render() {
		return <div className={'body-container user-select-none ' + (this.state.opened ? 'open' : 'closed')}>
			<LeftBar view={this.changeView.bind(this)}></LeftBar>
			<Jqueryinput onTextChange={this.textChanged.bind(this)}/>			
			<Jsoutput output={this.state.textOutput}/>
		</div>;
	}
}

