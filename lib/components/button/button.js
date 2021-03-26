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
import React from 'react';
import { StyledButton, StyledIcon } from './styled';
var Button = function (props, ref) {
    var _a = props.type, type = _a === void 0 ? 'default' : _a, icon = props.icon, _b = props.size, size = _b === void 0 ? 'default' : _b, className = props.className, children = props.children, _c = props.disabled, disabled = _c === void 0 ? false : _c, loading = props.loading, onClick = props.onClick, href = props.href, as = props.as, to = props.to;
    var styles = {
        innerType: type,
        size: size,
        disabled: disabled,
        withText: children != null
    };
    var childrenWithIcon = !icon ? children : (React.createElement(React.Fragment, null,
        children,
        React.createElement(StyledIcon, { as: icon })));
    if (as && !disabled) {
        return (React.createElement(StyledButton, __assign({ as: as, to: to, ref: ref, className: className }, styles), loading ? (React.createElement(React.Fragment, null, "Loading")) : childrenWithIcon));
    }
    if (href && !disabled) {
        return (React.createElement(StyledButton, __assign({ as: 'a', href: href, ref: ref, className: className }, styles), loading ? (React.createElement(React.Fragment, null, "Loading")) : childrenWithIcon));
    }
    return (React.createElement(StyledButton, __assign({ as: 'button', type: 'button', onClick: onClick, ref: ref, className: className }, styles), loading ? (React.createElement(React.Fragment, null, "Loading")) : childrenWithIcon));
};
export default React.forwardRef(Button);
//# sourceMappingURL=button.js.map