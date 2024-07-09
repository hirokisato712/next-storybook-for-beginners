import { Meta, StoryObj } from '@storybook/react';

import Component from './employees';

const meta = {
  title: 'dashboard/Employee',
  component: Component,
  args: {
    data: [
      {
        id: 1,
        name: '山田 太郎',
        email: 'test99@example.com',
        number: '090-1234-5678',
      },
      {
        id: 2,
        name: '田中 花子',
        email: 'test01@example.com',
        number: '090-1234-5678',
      },
      {
        id: 2,
        name: '田中 花子',
        email: 'test01@example.com',
        number: '090-1234-5678',
      },
      {
        id: 2,
        name: '田中 花子',
        email: 'test01@example.com',
        number: '090-1234-5678',
      },
      {
        id: 2,
        name: '田中 花子',
        email: 'test01@example.com',
        number: '090-1234-5678',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Employee: StoryObj<typeof meta> = {};
