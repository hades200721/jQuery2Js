/**
 *
 * @param outputPlainTextSize
 * @returns {string}
 */
let sizeFormatSuffix = function (outputPlainTextSize) {
    let suffix = 'Bytes';
        if (outputPlainTextSize > Math.pow(2, 20)) { // MB
            suffix = 'MB';
        } else {
            if (outputPlainTextSize > Math.pow(2, 10)) {
                suffix = 'KB';
            }
        }
    return suffix;
};

exports.sizeFormatSuffix = sizeFormatSuffix;