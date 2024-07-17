import { Meta, StoryObj } from '@storybook/react';

import Component from './defaultassign';

const meta = {
  title: 'defaultassign/defaultassign',
  component: Component,
  args: {
    defaultAssign: {
      data: {
        friday: true,
        holiday: false,
        monday: false,
        saturday: false,
        sunday: false,
        thursday: true,
        tuesday: true,
        wednesday: true,
        weekdayAssign: 'irure incididunt',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Defaultassign: StoryObj<typeof meta> = {};
