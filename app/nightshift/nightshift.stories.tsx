import { Meta, StoryObj } from '@storybook/react';

import Component from './nightshift';

const meta = {
  title: 'nightshift/nightshift',
  component: Component,
  args: {
    nightshift: {
      data: [
        {
          name: '夜勤一郎',
          count: 5,
        },
        {
          name: '夜勤二郎',
          count: 3,
        },
        {
          name: '夜勤三郎',
          count: 2,
        },
        {
          name: '夜勤四郎',
          count: 1,
        },
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[700px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const NightShift: StoryObj<typeof meta> = {};
