import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoxMobile, { IBoxMobile } from './BoxMobile';
import { mockBoxMobileProps } from './BoxMobile.mocks';

export default {
  title: 'utilities/BoxMobile',
  component: BoxMobile,
  argTypes: {},
} as ComponentMeta<typeof BoxMobile>;

//more component template
const Template: ComponentStory<typeof BoxMobile> = (args) => (
  <BoxMobile {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBoxMobileProps.base,
} as IBoxMobile;
