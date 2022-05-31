import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {ImageAvatars, ProfileProps} from "./Profile";

export default {
    title: "Header/Avatar",
    component: ImageAvatars,
} as Meta;

const Template: Story<ProfileProps> = (args) => <ImageAvatars {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    color: "default",
    name: "ML"
};
DefaultButton.parameters = {
    backgrounds: {
        default: "blue",
        values: [{ name: "blue", value: "#1976d2" }],
    },
};
