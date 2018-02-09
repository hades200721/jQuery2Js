var doSomething = function (num) {
    debugger;
    return num + 1;
}

var setAceOption = function (ace, prevProps, prevState) {
    if (!prevProps.aceOptions) { return true; }
    let val = prevProps.aceOptions.value;
    let prop = prevProps.aceOptions.prop;
    switch (prop) {
        case 'gutter': {
            ace.editor.setOption('showGutter', val);
            break;
        }
        case 'LineWrap': {
            ace.editor.setOption('setWrapBehavioursEnabled', val);
            break;
        }
        case 'showLineNumbers': {
            ace.editor.setOption('showLineNumbers', val);
            break;
        }
        case 'highlightActiveLine': {
            ace.editor.setOption('highlightActiveLine', val);
            break;
        }
        case 'showPrintMargin': {
            ace.editor.setOption('showPrintMargin', val);
            break;
        }
        case 'autocompletion': {
            ace.editor.setOption('enableBasicAutocompletion', val);
            ace.editor.setOption('enableLiveAutocompletion', val);            
            break;
        }
        case 'enableSnippets': {
            ace.editor.setOption('enableSnippets', val);
            break;
        }
        
        default: {
            break;
        }
    }
}

exports.doSomething = doSomething;
exports.setAceOption = setAceOption;