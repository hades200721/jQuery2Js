import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jQueryInputStyles from "./jQueryInput.scss";

export default class Jqueryinput extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(text, event) {
        const editor = this.ace.editor; // The editor object is from Ace's API
        this.props.onTextChange(text);
    }

    render() {
        return <div className="z1 editor-container">
            <AceEditor
                mode="javascript"
                theme="tomorrow"
                onChange={this.onChange}
                name="jQueryInputEditor"
                style={{height: '100%', width: 'auto', fontSize: '16px'}}
                editorProps={{ $blockScrolling: true }}
                debounceChangePeriod={100}
                value={this.props.textVal}
                ref={instance => { this.ace = instance; }} // Let's put things into scope
            />
        </div>;
    }
    
    componentDidMount() {
        this.setState({
            editor: this.ace.editor.getSession()
        })
        this.ace.editor.setOption(this.props.aceOptions)
    }

    componentDidUpdate(prevProps, prevState) {
        return true;
    }

    componentWillReceiveProps(prevProps, prevState) {        
        if (!prevProps.aceOptions) { return true; }
        let val = prevProps.aceOptions.value;
        let prop = prevProps.aceOptions.prop;
		switch (prop) {
            case 'gutter': {
                this.ace.editor.setOption('showGutter', val);
            }
            case 'LineWrap': {
                this.ace.editor.setOption('setWrapBehavioursEnabled', val);
            }
            case 'showLineNumbers': {
                this.ace.editor.setOption('showLineNumbers', val);
            }
            case 'highlightActiveLine': {
                this.ace.editor.setOption('highlightActiveLine', val);
            }
            case 'showPrintMargin': {
                this.ace.editor.setOption('showPrintMargin', val);
            }  
            
            default: {
                break;
            }
		}
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true;
    }

    componentWillUpdate(prevProps, prevState) {
        return true;
    }

}

