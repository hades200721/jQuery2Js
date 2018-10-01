let formatService = require('../services/formatService');
const axios = require('axios');

let showFileSize = function(args) {
    this.setState({
        isHidden: !args.value
    });
};

let minifyCode = function(text) {
        axios({
            method: 'post',
            url: 'http://javascript-minifier.com/raw',
            input: 'function+esdfgsggee%28firstvar%2C+secondvar%29%7B%0D%0Areturn+false%3B%0D%0A%7D'
        })
        .then(function (response) {
            debugger;
            console.log(error);
            this.onChanged(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            console.log('done minfing');
        });
};

let onChanged = function (text, previousText) {
    this.props.onTextChange(text, previousText);
    this.setState({
        format :formatService.sizeFormatSuffix(text.length),
        jqCode: text
    });
};

exports.showFileSize = showFileSize;
exports.minifyCode = minifyCode;
exports.onChanged = onChanged;