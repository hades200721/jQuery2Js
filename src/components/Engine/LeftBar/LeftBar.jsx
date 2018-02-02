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
		this.props.view();
	};

	toogleCheckbox(prop, val) {
		this.props.modifiedEditor(prop, val);
	};
	
	render() {
		return <div ref="slider" className="z2 flex flex-column left-panel">
			<div className="flex-auto overflow-hidden">
				<DropDown title="Settings" options={
					[{key: 'Evaluate', label: 'Evaluate'}, {key: 'Minify',  label: 'Minify'},
					{key: 'Prettify',  label: 'Prettify'}]}> </DropDown>
				<DropDown title="Presets" options={
					[{key: 'gutter', label: 'Show Gutter'}, {key: 'LineWrap', label: 'Line Wrap'},
					{key: 'showLineNumbers', label: 'Show Line Numbers'}, {key: 'highlightActiveLine', label: 'Highlight Active Line'},
					{key: 'ShowPrintMargin', label: 'Show Print Margin'}, {key: 'FileSize', label: 'File Size'}]}
													toogleCheckbox={this.toogleCheckbox.bind(this)}> </DropDown>
				<DropDown title="Advanced setting" options={[{key: 'EnableBasicAutocomplete', label: 'Enable Basic Autocomplete'},
				{key: 'EnableSnippets', label: 'Enable Snippets'}, {key:'FontSize' ,label: 'Font Size'},
				{key: 'Theme', label: 'Theme'}]}> </DropDown>
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
