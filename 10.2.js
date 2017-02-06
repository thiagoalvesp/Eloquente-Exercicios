function require(name) {
    if (name in require.cache)
        return require.cache[name];

    var code = new Function("exports, module", name);
    var exports = {}, mod = { exports: exports };
    code(exports, mod);

    require.cache[name] = module.exports;
    return module.exports;
}
require.cache = Object.create(null);

function a() {
    var names = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    exports.name = function (number) {
        return names[number];
    };
    exports.number = function (name) {
        return names.indexOf(name);
    };
}

function b() {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    exports.name = function (number) {
        return names[number];
    };
    exports.number = function (name) {
        return names.indexOf(name);
    };
}

var month = require(a).name(1);

console.log(month);