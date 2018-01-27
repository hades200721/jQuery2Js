import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jQueryInputStyles from "./jQueryInput.scss";

function onChange(newValue) {
	console.log('change', newValue);
}

export default class Jqueryinput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className="editor-container">
            <AceEditor
                mode="javascript"
                theme="tomorrow"
                onChange={onChange}
                name="jQueryInputEditor"
                style={{height: '100%', width: 'auto'}}
                editorProps={{ $blockScrolling: true }}
            />
        </div>;
    }
}

