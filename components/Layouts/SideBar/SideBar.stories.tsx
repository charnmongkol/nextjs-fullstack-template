import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBar, { ISideBar } from './SideBar';
import { mockSideBarProps } from './SideBar.mocks';

export default {
  title: 'Layouts/SideBar',
  component: SideBar,
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

//more component template
const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSideBarProps.base,
} as ISideBar;
