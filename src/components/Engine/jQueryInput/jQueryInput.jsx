import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jQueryInputStyles from "./jQueryInput.scss";
var aceConnector = require('../../../services/aceConnector');

export default class Jqueryinput extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(text, event) {
        const editor = this.ace.editor;
        this.props.onTextChange(text);
    }

    render() {
        return <div className="z1 relative editor-container">
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
            <div className="absolute bottom-0 right-0 mb1 mr2 text-size text-size">{this.props.textVal.length} bytes</div>
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
        aceConnector.setAceOption(this.ace, prevProps, prevState)
    }

    shouldComponentUpdate(prevProps, prevState) {
        return true;
    }

    componentWillUpdate(prevProps, prevState) {
        return true;
    }

}

