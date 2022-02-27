import { Label, LabelProps } from '../../components/Label';
import { ComponentMeta, ComponentStory } from '@storybook/react';
export default {
    title: 'UI/Label',
    component: Label,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }, 
        size: { control: 'select' },
        fontColor: { control: 'color' },
    }   
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ( args: LabelProps ) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    label: 'My Label',
    AllCaps: false, //capitalizar toda la palabra
    color: 'primary' //primary, secondary, tertiary
}

export const AllCaps = Template.bind({});

AllCaps.args = {
    size: 'normal',
    AllCaps: true, //capitalizar toda la palabra
}

export const Secondary = Template.bind({});

Secondary.args = {
    size: 'normal',
    color: 'secondary' //primary, secondary, tertiary
}

export const Tertiary = Template.bind({});

Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const FontColor = Template.bind({});

FontColor.args = {
    size: 'h1',
    fontColor: '#1d46d7'
}

export const BackgroundColor = Template.bind({});

BackgroundColor.args = {
    size: 'h1',
    backgroundColor: 'black',
    fontColor: 'white'
}