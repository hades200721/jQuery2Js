/**
 *
 * @param inputJQueryCode plain text with jQuery
 * @returns string vanilla javascript code
 */
let compileToJS = function (output, inputJQueryCode, previousJQueryCode) {
    if (inputJQueryCode.trim() === previousJQueryCode.trim()) {
        // do nothing
        return output;
    }
    let result = ''; let functionsFound = null;
    let codeParts = inputJQueryCode.split(';');
    let previousCodeParts = previousJQueryCode.split(';');
    for (let i = 0; i < codeParts.length; i++) {
        if (!previousCodeParts[i] || previousCodeParts[i].trim() != codeParts[i].trim()) {
            functionsFound = this.defineFunctionality(codeParts[i]);
            result += this.convertFunctions(functionsFound, codeParts[i]);
        } else {
            result += codeParts[i];
        }
    }


    return result;
};


function ajaxCall(params) {
    console.log(params);
    return true;
}

function isJQuerySelector(code) {
    let selector = new RegExp(/^(#|\.)*[a-zA-Z]{1}\w*$/);
    if (selector.test(code)) // legal selector
    {
        code.replace(selector, (matchedString, first, second) => {
            console.log(first);
            console.log(second);
            return `${second.toUpperCase()}: ${first}!!!`;
        });
    } else { // illegal selector
        return code;
    }
}

let defineFunctionality = function(code) {
    let functionsFound = [];
    code = isJQuerySelector(code);
    if (code.indexOf('hide()') > -1) {
        functionsFound.push('hide');
    }
    if (code.indexOf('show()') > -1) {
        functionsFound.push('show');
    }
    return functionsFound;
};

let convertFunctions = function(functionsName, code) {
    let convertedCode = '';
    functionsName.forEach( function(functionName) {
        switch (functionName) {
            case 'hide':
                convertedCode = code.replace('hide()', 'style.display = \'none\'');
                break;
            case 'show':
                convertedCode = code.replace('show()', 'style.display = \'\'');
                break;
            case 'ajax':
                convertedCode = ajaxCall(code);
                break;
            default:
                break;
        }
    });
    return convertedCode;
};















/**
 * function handling ace option ui/ux logic
 * @param ace ace instance
 * @param prevProps - previous property value
 * @param prevState - object right now not in use
 * @returns {boolean} true if handled with success, false otherwise
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
        case 'fontSize': {
            ace.editor.setOption('fontSize', val);
            break;
        }
        case 'Theme': {
            let newThemeName = 'ace/theme/' + val;
            ace.editor.setTheme(newThemeName);
            break;
        }
        default: {
            break;
        }
    }
    return true;
};

exports.compileToJS = compileToJS;
exports.setAceOption = setAceOption;
exports.defineFunctionality = defineFunctionality;
exports.convertFunctions = convertFunctions;
