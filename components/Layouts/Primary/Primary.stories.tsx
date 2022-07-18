import { ComponentMeta, ComponentStory } from '@storybook/react';
import Primary, { IPrimary } from './Primary';
import { mockPrimaryProps } from './Primary.mocks';

export default {
  title: 'Layouts/Primary',
  component: Primary,
  argTypes: {},
} as ComponentMeta<typeof Primary>;

//more component template
const Template: ComponentStory<typeof Primary> = (args) => (
  <Primary {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockPrimaryProps.base,
} as IPrimary;
