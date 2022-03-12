var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import "./label.css";
/**
 * Hashtag
 */
export var Label = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "No label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.AllCaps, AllCaps = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? "primary" : _e, _f = _a.fontColor, fontColor = _f === void 0 ? 'black' : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? 'transparent' : _g, props = __rest(_a, ["label", "size", "AllCaps", "color", "fontColor", "backgroundColor"]);
    return (_jsx("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: AllCaps ? label.toLocaleUpperCase() : label }), void 0));
};
