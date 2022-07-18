import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoxSectionLeft, { IBoxSectionLeft } from './BoxSectionLeft';
import { mockBoxSectionLeftProps } from './BoxSectionLeft.mocks';

export default {
  title: 'utilities/BoxSectionLeft',
  component: BoxSectionLeft,
  argTypes: {},
} as ComponentMeta<typeof BoxSectionLeft>;

//more component template
const Template: ComponentStory<typeof BoxSectionLeft> = (args) => (
  <BoxSectionLeft {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBoxSectionLeftProps.base,
} as IBoxSectionLeft;
