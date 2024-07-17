import { Meta, StoryObj } from '@storybook/react';

import Component from './paidvacation';

const meta = {
  title: 'paidvacation/paidvacation',
  component: Component,
  args: {
    paidvacation: {
      data: [
        {
          name: '有給一郎',
          count: 5,
          aggregationPeriod: '2021/10/1',
        },
        {
          name: '有給二郎',
          count: 3,
          aggregationPeriod: '2021/10/1',
        },
        {
          name: '有給三郎',
          count: 2,
          aggregationPeriod: '2021/10/31',
        },
        {
          name: '有給四郎',
          count: 1,
          aggregationPeriod: '2021/10/31',
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

export const PaidVacation: StoryObj<typeof meta> = {};
