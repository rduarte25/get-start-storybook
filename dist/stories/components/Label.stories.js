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
import { jsx as _jsx } from "react/jsx-runtime";
import { Label } from '../../components/Label';
export default {
    title: 'UI/Label',
    component: Label,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        size: { control: 'select' },
        fontColor: { control: 'color' },
    }
};
var Template = function (args) { return _jsx(Label, __assign({}, args), void 0); };
export var Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    label: 'My Label',
    AllCaps: false,
    color: 'primary' //primary, secondary, tertiary
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    AllCaps: true, //capitalizar toda la palabra
};
export var Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' //primary, secondary, tertiary
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
export var FontColor = Template.bind({});
FontColor.args = {
    size: 'h1',
    fontColor: '#1d46d7'
};
export var BackgroundColor = Template.bind({});
BackgroundColor.args = {
    size: 'h1',
    backgroundColor: 'black',
    fontColor: 'white'
};
