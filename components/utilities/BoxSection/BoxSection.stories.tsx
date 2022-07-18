import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoxSection, { IBoxSection } from './BoxSection';
import { mockBoxSectionProps } from './BoxSection.mocks';

export default {
  title: 'utilities/BoxSection',
  component: BoxSection,
  argTypes: {},
} as ComponentMeta<typeof BoxSection>;

//more component template
const Template: ComponentStory<typeof BoxSection> = (args) => (
  <BoxSection {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBoxSectionProps.base,
} as IBoxSection;
