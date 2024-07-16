import { Meta, StoryObj } from '@storybook/react';

import Component from './settingholiday';

const meta = {
  title: 'settingholiday/settingholiday',
  component: Component,
  args: {
    settingholiday: {
      data: [
        { id: 1, date: '2022-01-01', name: '元日', isNationalHoliday: false },
        { id: 2, date: '2022-01-10', name: '成人の日', isNationalHoliday: false },
        { id: 3, date: '2022-02-11', name: '建国記念の日', isNationalHoliday: false },
        { id: 4, date: '2022-02-23', name: '天皇誕生日', isNationalHoliday: false },
        { id: 5, date: '2022-03-20', name: '春分の日', isNationalHoliday: false },
        { id: 6, date: '2022-01-02', name: '正月休み', isNationalHoliday: true },
        { id: 7, date: '2022-01-03', name: '正月休み', isNationalHoliday: true },
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

export const SettingHoliday: StoryObj<typeof meta> = {};
