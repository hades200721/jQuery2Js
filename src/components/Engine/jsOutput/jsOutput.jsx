import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jsOutputStyles from "./jsOutput.scss";
let aceConnector = require('../../../services/aceConnector');
let formatService = require('../../../services/formatService');
let generalServices = require('../../../services/generalServices');

export default class Jsoutput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            format: 'Bytes',
            isHidden: false,
            vanillaJSCode: ''
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
            { !this.state.isHidden && <div className="absolute bottom-0 right-0 mb1 mr2 text-size">{this.state.vanillaJSCode.length} {this.state.format}</div> }
        </div>;
    }
    componentDidUpdate() {
        this.ace.editor.getSession().setValue(this.state.vanillaJSCode);
    }

    componentWillReceiveProps(prevProps, prevState) {
        let outputPlainText = prevProps.output;
        this.setState({
            format :formatService.sizeFormatSuffix(outputPlainText.length),
            vanillaJSCode: aceConnector.doSomething(this.props.output)
        });
        if (prevProps.aceOptions) { // set ace editor option
            aceConnector.setAceOption(this.ace, prevProps, prevState);
        } else {
            if (prevProps.customFunction) {
                let functionObj = generalServices[prevProps.customFunction.name];
                if (functionObj) {
                    functionObj.call(this, prevProps.customFunction.args);
                }
            }
        }
    }
}
