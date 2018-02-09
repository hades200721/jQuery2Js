import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jsOutputStyles from "./jsOutput.scss";
var aceConnector = require('../../../services/aceConnector');

export default class Jsoutput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className="relative output-container">
            <AceEditor
                mode="javascript"
                theme="tomorrow"
                readOnly={true}
                name="JSOutputEditor"
                style={{ height: '100%', width: 'auto', fontSize: '16px' }}
                editorProps={{ $blockScrolling: true }}
                ref={instance => { this.ace = instance; }} // Let's put things into scope
            />
            <div className="absolute bottom-0 right-0 mb1 mr2 text-size">{this.props.output.length} bytes</div>
        </div>;
    }

    componentDidUpdate() {
        this.ace.editor.getSession().setValue(this.props.output);
    }

    componentWillReceiveProps(prevProps, prevState) {  
        aceConnector.setAceOption(this.ace, prevProps, prevState)
    }
}
