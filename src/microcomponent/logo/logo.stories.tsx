import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { LogoProps, MainLogo } from './logo'

export default {
    title: "Header/Logo",
    component: MainLogo,
} as Meta;

const Template: Story<LogoProps> = (args) => <MainLogo {...args} />;

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {
    img:"https://res.cloudinary.com/joeutd/image/upload/v1651004286/js-academy/itexico_s1mdee.png",
    size:"small"
};

DefaultLogo.parameters = {
    backgrounds: {
        default: "blue",
        values: [{ name: "blue", value: "#1976d2" }],
    },
};

