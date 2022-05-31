import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { SwitchProps, SwitchButton } from "./Switch";


export default {
    title: "Header/Switch/SwitchButton",
    component: SwitchButton,
} as Meta;

const Template: Story<SwitchProps> = (args) => <SwitchButton {...args} />;

export const DefaultSwitch = Template.bind({});
DefaultSwitch.args = {
};
DefaultSwitch.parameters = {
  backgrounds: {
    default: "blue",
    values: [{ name: "blue", value: "#1976d2" }],
  },
};