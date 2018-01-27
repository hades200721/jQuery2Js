import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jsOutputStyles from "./jsOutput.scss";

export default class Jsoutput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <div className="output-container">
        <AceEditor
				mode="javascript"
                theme="tomorrow"
                readOnly="true"
                name="JSOutputEditor"
                style={{height: '100%', width: 'auto'}}
				editorProps={{ $blockScrolling: true }}
			/>
        </div>;
    }
}
