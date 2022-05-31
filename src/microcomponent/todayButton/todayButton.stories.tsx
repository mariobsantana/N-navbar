import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { TodayButton, TodayButtonProps } from "./todayButton";

export default {
  title: "Header/TodayButton",
  component: TodayButton,
} as Meta;

const Template: Story<TodayButtonProps> = (args) => <TodayButton {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "Today",
  color: "default",
  size: "medium",
};
DefaultButton.parameters = {
  backgrounds: {
    default: "blue",
    values: [{ name: "blue", value: "#1976d2" }],
  },
};
