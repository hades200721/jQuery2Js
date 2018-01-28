import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jQueryInputStyles from "./jQueryInput.scss";

export default class Jqueryinput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        this.props.onTextChange(newValue);
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
            />
        </div>;
    }
}

