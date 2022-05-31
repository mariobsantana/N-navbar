import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {ArrowProps, ArrowsButtons} from "./Arrows";

export default {
    title: "Header/ArrowNavigation",
    component: ArrowsButtons,
} as Meta;

const Template: Story<ArrowProps> = (args) => <ArrowsButtons {...args} />;

export const DefaultArrows = Template.bind({});
DefaultArrows.args = {
    color: "default",
    size: "small",
};
export const PrimaryArrows = Template.bind({});
PrimaryArrows.args = {
    color: "primary",
    size: "small",
};
DefaultArrows.parameters = {
    backgrounds: {
        default: "blue",
        values: [{ name: "blue", value: "#1976d2" }],
    },
};
