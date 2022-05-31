
import { Story, Meta } from "@storybook/react";
import { PopoverPopupState, HoursProps } from "../displayhrs/DisplayHrs";
import { hrsT } from "../../data/hours";





export default {
    title: "Header/DisplayHrs",
    component: PopoverPopupState,
} as Meta;

const Template: Story<HoursProps> = (args) => <PopoverPopupState {...args} />;

export const displayHrs = Template.bind({});
displayHrs.args = {
    hours: hrsT,
    color: "secondary" 
};
displayHrs.parameters = {
    actions: {
        handles: ['mouseover', 'click .btn'],
      },
    viewport: { 
        defaultViewport: "tablet"
    },
    controls: {
        expanded: true,
    },
};












