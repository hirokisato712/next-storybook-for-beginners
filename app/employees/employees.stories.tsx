import { Meta, StoryObj } from '@storybook/react';

import Component from './employees';

const meta = {
  title: 'employees/Employee',
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
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Employee: StoryObj<typeof meta> = {};
