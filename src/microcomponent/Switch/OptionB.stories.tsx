import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { OptionB, OptionBProps } from "./OptionB";

export default {
  title: "Header/Switch/Options/OptionB",
  component: OptionB,
} as Meta;

const Template: Story<OptionBProps> = (args) => <OptionB {...args} />;

export const DefaultRightButton = Template.bind({});
DefaultRightButton.args = {
  children: "Month",
  color: "default",
  size: "medium",
};
DefaultRightButton.parameters = {
  backgrounds: {
    default: "blue",
    values: [{ name: "blue", value: "#1976d2" }],
  },
};