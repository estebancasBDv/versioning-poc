import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { V2 } from './v2';

const Story: ComponentMeta<typeof V2> = {
  component: V2,
  title: 'V2',
};
export default Story;

const Template: ComponentStory<typeof V2> = (args) => <V2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
