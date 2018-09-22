let doSomething = function (num) {
    
    return num + 1;
};

/**
 * function handling ace option ui/ux logic
 * @param ace ace instence
 * @param prevProps - previous property value
 * @param prevState - object right now not in use
 * @returns {boolean} true if handled with sucess, false otherwise
 */
let setAceOption = function (ace, prevProps) {
    if (!prevProps.aceOptions) { return true; }
    let val = prevProps.aceOptions.value;
    let prop = prevProps.aceOptions.prop;
    switch (prop) {
        case 'gutter': {
            ace.editor.setOption('showGutter', val);
            break;
        }
        case 'LineWrap': {
            ace.editor.setOption('wrap', val);
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
    return true;
};

exports.doSomething = doSomething;
exports.setAceOption = setAceOption;
