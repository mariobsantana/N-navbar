import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { OptionA, OptionAProps } from "./OptionA";

export default {
  title: "Header/Switch/Options/OptionA",
  component: OptionA,
} as Meta;

const Template: Story<OptionAProps> = (args) => <OptionA {...args} />;

export const DefaultLeftButton = Template.bind({});
DefaultLeftButton.args = {
  children: "Week",
  color: "default",
  size: "medium",
};
DefaultLeftButton.parameters = {
  backgrounds: {
    default: "blue",
    values: [{ name: "blue", value: "#1976d2" }],
  },
};