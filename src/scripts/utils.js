module.exports = function () {
    return {
        parseUrlForQueryParams: function (url) {
            const queryParamString = url.split('?')[1]
            return queryParamString && queryParamString.split('&').reduce((acc, param) => {
                const key_value = param.split("=");
                acc[key_value[0]] = key_value[1]
                return acc;
            }, {}) || {};
        }
    }
}();