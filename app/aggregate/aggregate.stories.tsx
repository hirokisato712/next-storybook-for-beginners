import { Meta, StoryObj } from '@storybook/react';

import Component from './aggregate';

const meta = {
  title: 'aggregate/aggregate',
  component: Component,
  args: {
    aggregate: {
      data: [
        {
          name: 'イオン',
          startAt: '2022-01-01',
          endAt: '2022-01-05',
          manHour: 4,
          totalManHour: 20,
        },
        {
          name: 'セブンイレブン',
          startAt: '2022-01-06',
          endAt: '2022-01-10',
          manHour: 4,
          totalManHour: 20,
        },
        {
          name: 'ローソン',
          startAt: '2022-01-11',
          endAt: '2022-01-15',
          manHour: 3,
          totalManHour: 5,
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

export const Aggregate: StoryObj<typeof meta> = {};
