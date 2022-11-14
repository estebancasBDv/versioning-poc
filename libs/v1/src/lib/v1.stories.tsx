import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { V1 } from './v1';

const Story: ComponentMeta<typeof V1> = {
  component: V1,
  title: 'V1',
};
export default Story;

const Template: ComponentStory<typeof V1> = (args) => <V1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
