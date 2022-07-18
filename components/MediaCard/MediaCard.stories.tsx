import { ComponentMeta, ComponentStory } from '@storybook/react';
import MediaCard, { IMediaCard } from './MediaCard';
import { mockMediaCardProps } from './MediaCard.mocks';

export default {
  title: 'MediaCard/MediaCard',
  component: MediaCard,
  argTypes: {},
} as ComponentMeta<typeof MediaCard>;

//more component template
const Template: ComponentStory<typeof MediaCard> = (args) => (
  <MediaCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMediaCardProps.base,
} as IMediaCard;
