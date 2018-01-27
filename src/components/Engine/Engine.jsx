import React from "react";
import LeftBar from './LeftBar/LeftBar';
import Convertor from './Convertor/Convertor';
import styles from './engine.scss';

export default class Engine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: true
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

	render() {
		var { aaa, bbb, ccc } = this.props;
		return <div className={'body-container user-select-none ' + (this.state.opened ? 'open' : 'closed')}>
			<LeftBar view={this.changeView.bind(this)}></LeftBar>
			<Convertor></Convertor>
		</div>;
	}
}

