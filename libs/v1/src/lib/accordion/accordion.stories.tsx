import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './accordion';

const Story: ComponentMeta<typeof Accordion> = {
  component: Accordion,
  title: 'V1/Accordion',
};
export default Story;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
