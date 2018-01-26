import React from "react";
import LeftBar from './LeftBar/LeftBar';
import Convertor from './Convertor/Convertor';
import styles from './engine.scss';

export default class Engine extends React.Component {
	static getProps(stores, params) {
		return {
			// Fetch data here
		};
	}
	render() {
		var { aaa, bbb, ccc } = this.props;
		return <div className="body-container">
				<LeftBar></LeftBar>
				<Convertor></Convertor>
		</div>;
	}
}

