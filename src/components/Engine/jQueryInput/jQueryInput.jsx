import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night';
import 'brace/theme/monokai';
import jQueryInputStyles from "./jQueryInput.scss";

var aceConnector = require('../../../services/aceConnector');
let generalServices = require('../../../services/generalServices');

export default class Jqueryinput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            format: 'Bytes',
            jqCode: ''
        };
        this.onJQCodeChange = this.onJQCodeChange.bind(this);
    }

    onJQCodeChange(text) {
        generalServices.onChanged.call(this, text, this.state.jqCode);
    }

    render() {
        return <div className="z1 relative editor-container">
            <AceEditor
                mode="javascript"
                theme="tomorrow_night"
                onChange={this.onJQCodeChange}
                name="jQueryInputEditor"
                style={{height: '100%', width: 'auto', fontSize: '18px'}}
                editorProps={{ $blockScrolling: true }}
                value={this.state.jqCode}
                ref={instance => { this.ace = instance; }} // Let's put things into scope
            />
            { !this.state.isHidden && <div className="absolute bottom-0 right-0 mb1 mr2 text-size text-size">{this.state.jqCode.length} {this.state.format}</div> }
        </div>;
    }
    
    componentDidMount() {
        this.setState({
            editor: this.ace.editor.getSession()
        });
        this.ace.editor.setOption(this.props.aceOptions);
    }

    componentDidUpdate(prevProps, prevState) {
        return true;
    }

    componentWillReceiveProps(prevProps, prevState) {
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

    shouldComponentUpdate(prevProps, prevState) {
        return true;
    }

    componentWillUpdate(prevProps, prevState) {
        return true;
    }

}

