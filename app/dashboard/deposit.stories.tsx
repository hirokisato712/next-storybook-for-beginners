import { Meta, StoryObj } from '@storybook/react';

import Component from './deposit';

const meta = {
  title: 'dashboard/Deposit',
  component: Component,
  args: {
    data: {
      amount: 3024,
      date: '2019/3/15 00:00',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[250px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Deposit: StoryObj<typeof meta> = {};
