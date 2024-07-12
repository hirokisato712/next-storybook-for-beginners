import { Meta, StoryObj } from '@storybook/react';

import Component from './mainlist';

const meta = {
  title: 'mainlist/mainlist',
  component: Component,
  args: {
    employee: {
      data: [
        {
          id: '1',
          name: '山田 太郎',
          email: 'test99@example.com',
          phone: '090-1234-5678',
          initial: 'Y',
          hireDate: '2021-12-31',
          color: 'red',
          isCalendarVisible: true,
          role: 'admin',
        },
        {
          id: '2',
          name: '田中 花子',
          email: 'test88@example.com',
          phone: '090-1234-5678',
          initial: 'T',
          hireDate: '2021-12-31',
          color: 'blue',
          isCalendarVisible: true,
          role: 'user',
        },
      ],
    },
    partner: {
      data: [
        {
          id: '1',
          name: '株式会社テスト',
          initial: 'T',
          phone: '090-1234-5678',
        },
        {
          id: '2',
          name: '株式会社テスト2',
          initial: 'T',
          phone: '090-1234-5678',
        },
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const MainList: StoryObj<typeof meta> = {};
