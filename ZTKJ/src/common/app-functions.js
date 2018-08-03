'use static';

// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

let g_fn = {};
g_fn.repeat = (str, num) => {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += str;
    }
    return result;
};

g_fn.arrayEqual = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};

g_fn.trimChars = (str, chars) => {
    var start = 0;
    var end = str.length - 1;
    while (chars.indexOf(str.charAt(start)) >= 0) {
        start++;
    }
    while (chars.indexOf(str.charAt(end)) >= 0) {
        end--;
    }
    return str.slice(start, end + 1);
};

g_fn.capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

g_fn.arrayUnion = () => {
    var result = [];
    for (var i = 0, values = {}; i < arguments.length; i++) {
        var arr = arguments[i];
        for (var j = 0; j < arr.length; j++) {
            if (!values[arr[j]]) {
                values[arr[j]] = true;
                result.push(arr[j]);
            }
        }
    }
    return result;
};

g_fn.strArray2IntArray = (strArray) => {
    let int_array_ = [];
    for (let index_ in strArray) {
        int_array_.push(parseInt(strArray[index_]));
    }
    return int_array_;
};

g_fn.has = (obj, key) => {
    return obj.hasOwnProperty(key);
};

g_fn.extend = (dest, src) => {
    for (var i in src) {
        dest[i] = src[i];
    }
};

g_fn.trimEnd = (str) => {
    return str.replace(/\s+$/g, '');
};

g_fn.isEmpty = (obj) => {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
};

g_fn.strToJson = (str) => {
    return (new Function("return " + str))();
};

g_fn.jsonToStr = (object) => {
    return JSON.stringify(object);
};

g_fn.updateComponent = (component, propKey, propValue) => {
    if (undefined == component || undefined == propKey || undefined == propValue) {
        return;
    }
    if (g_fn.has(component.props, propKey)) {
        component.props[propKey] = propValue;
        component.setState({});
    }
};

export default g_fn;
export {g_fn};
