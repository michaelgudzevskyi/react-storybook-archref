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
import * as React from "react";
function SvgArrowDown(props) {
    return (React.createElement("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: 0, viewBox: "0 0 24 24", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { stroke: "none" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" }))));
}
export default SvgArrowDown;
//# sourceMappingURL=ArrowDown.js.map