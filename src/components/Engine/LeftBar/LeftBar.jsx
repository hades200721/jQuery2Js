import React from "react";
import DropDown from './DropDown/DropDown';
import styles from './leftBar.scss';

export default class LeftBar extends React.Component {
	constructor(props) {
        super(props);
		this.togglePanel = this.togglePanel.bind(this);
        this.state = {
            open: true,
        };
    }

    togglePanel() {
        this.setState(prevState => ({
			open: !prevState.open
		  }));
	};
	
	static getProps(stores, params) {
		return { };
	}
	render() {
		return <div ref="slider" className={'flex flex-column left-panel ' + (this.state.open ? 'open': 'close')}>
			<div className="flex-auto">
				<DropDown title="Settings" options={['Evaluate', 'Minify', 'Prettify']}> </DropDown>
				<DropDown title="Presets" options={['White spaces', 'Line Wrap', 'Line Numbers', 'File Size']}> </DropDown>
				<DropDown title="Env Preset" options={['White spaces', 'Line Wrap', 'Line Numbers', 'File Size']}> </DropDown>
			</div>
			<div className="slideBtn" onClick={this.togglePanel}>
				<svg style={{width: '2rem', height: '2rem'}} viewBox="0 0 24 24">
					<path fill="currentcolor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
				</svg>
			</div>
			<div className="footer" title="v0.1">v0.1</div>
		</div>;
	}
}
