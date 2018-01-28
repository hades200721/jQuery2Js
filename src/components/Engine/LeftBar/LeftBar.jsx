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

    togglePanel(e) {
		e.preventDefault();
		this.props.view();
	};
	
	static getProps(stores, params) {
		return { };
	}
	render() {
		return <div ref="slider" className="z2 flex flex-column left-panel">
			<div className="flex-auto overflow-hidden">
				<DropDown title="Settings" options={['Evaluate', 'Minify', 'Prettify']}> </DropDown>
				<DropDown title="Presets" options={['Show Gutter', 'Line Wrap', 'Show Line Numbers', 
													'Highlight Active Line', 'Show Print Margin', 'File Size']}> </DropDown>
				<DropDown title="Advanced setting" options={['Enable Basic Autocomplete', 'Enable Snippets', 'Font Size', 'Theme']}> </DropDown>
			</div>
			<div className="slide-btn" onClick={this.togglePanel}>
				<svg style={{width: '2rem', height: '2rem'}} viewBox="0 0 24 24">
					<path fill="currentcolor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
				</svg>
			</div>
			<div className="footer overflow-hidden">
				<div className="footer-info" title="v0.1"> v0.1 </div>
			</div>
		</div>;
	}
}
