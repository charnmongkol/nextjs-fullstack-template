import { ComponentMeta, ComponentStory } from '@storybook/react';
import SlideMobile, { ISlideMobile } from './SlideMobile';
import { mockSlideMobileProps } from './SlideMobile.mocks';

export default {
  title: 'Slide/SlideMobile',
  component: SlideMobile,
  argTypes: {},
} as ComponentMeta<typeof SlideMobile>;

//more component template
const Template: ComponentStory<typeof SlideMobile> = (args) => (
  <SlideMobile {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSlideMobileProps.base,
} as ISlideMobile;
