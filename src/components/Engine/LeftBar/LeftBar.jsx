import React from "react";
import DropDown from './DropDown/DropDown';
import styles from './leftBar.scss';

export default class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.togglePanel = this.togglePanel.bind(this);
        this.state = {
            open: true,
            defaultValue: true
        };
    }

    togglePanel(e) {
        this.setState({
            open: !this.state.open
        });
        this.props.view();
    }

    toggleCheckbox(prop, val, customFunctionObject = false) {
        if (customFunctionObject) {
            customFunctionObject.args.value = val;
            this.props.customFunction(customFunctionObject);
        } else {
            this.props.modifiedEditor(prop, val);
        }
    }

    render() {
        return <div className="z2 flex flex-column left-panel">
            {this.state.open && (<div className="flex-auto overflow-hidden">
                    <DropDown title="Settings" options={
                            [{key: 'Evaluate', label: 'Evaluate', value: false},
                            {key: 'Minify', label: 'Minify', value: false, customFunction: {name: 'minifyCode', args: {}} },
                            {key: 'Prettify', label: 'Prettify', value: false}]}
                            toggleCheckbox={(prop, value, customF) => this.toggleCheckbox(prop, value, customF) }>
                    </DropDown>
                    <DropDown title="Presets" options={[
                            {key: 'gutter', label: 'Show Gutter', value: true},
                            {key: 'LineWrap', label: 'Line Wrap', value: true},
                            {key: 'showLineNumbers', label: 'Show Line Numbers', value: true},
                            {key: 'highlightActiveLine', label: 'Highlight Active Line', value: true},
                            {key: 'showPrintMargin', label: 'Show Print Margin', value: true} ]}
                              toggleCheckbox={(prop, value, customF) => this.toggleCheckbox(prop, value, customF) }> </DropDown>
                    <DropDown title="Advanced setting" options={[
                        {key: 'autocompletion', label: 'Basic Autocomplete', value: false},
                        {key: 'enableSnippets', label: 'Enable Snippets', value: false},
                        {key: 'fontSize', label: 'Font Size', type: 'number', value: 18},
                        {key: 'showFileSize', label: 'Show File Size', customFunction: { name: 'showFileSize', args: {} }, value: true},
                        {key: 'Theme', label: 'Theme', type: 'dropDown', value: 'tomorrow_night'}]
                    }
                              toggleCheckbox={(prop, value, customF) => this.toggleCheckbox(prop, value, customF) }> </DropDown>
                </div>
            )}
            <div className="slide-btn" onClick={this.togglePanel}>
                <svg style={{width: '2rem', height: '2rem'}} viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                </svg>
            </div>
            <div className="footer overflow-hidden">
                <div className="footer-info" title="v0.2"> v0.2</div>
            </div>
        </div>;
    }
}