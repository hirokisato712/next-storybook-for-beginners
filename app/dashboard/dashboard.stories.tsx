import { Meta, StoryObj } from '@storybook/react';

import Component from './dashboard';

const meta = {
  title: 'dashboard/Dashboard',
  component: Component,
  args: {
    chart: {
      data: [
        { time: '00:00', amount: 0 },
        { time: '03:00', amount: 200 },
        { time: '06:00', amount: 600 },
        { time: '09:00', amount: 800 },
        { time: '12:00', amount: 1500 },
        { time: '15:00', amount: 2000 },
        { time: '18:00', amount: 2400 },
        { time: '21:00', amount: 2400 },
        { time: '24:00', amount: 2500 },
      ],
    },
    deposit: {
      data: {
        amount: 3024,
        date: '2019/3/15 00:00',
      },
    },
    order: {
      data: [
        {
          id: 1,
          date: '2019 /03 / 16',
          name: 'Elvis Presley',
          shipTo: 'Tupelo, MS',
          paymentMethod: 'VISA ⠀•••• 3719',
          amount: 312.44,
        },
        {
          id: 2,
          date: '2019 /03 / 16',
          name: 'Paul McCartney',
          shipTo: 'London, UK',
          paymentMethod: 'VISA ⠀•••• 2574',
          amount: 866.99,
        },
        {
          id: 3,
          date: '2019 /03 / 16',
          name: 'Tom Scholz',
          shipTo: 'Boston, MA',
          paymentMethod: 'MC ⠀•••• 1253',
          amount: 100.81,
        },
        {
          id: 4,
          date: '2019 /03 / 16',
          name: 'Michael Jackson',
          shipTo: 'Gary, IN',
          paymentMethod: 'AMEX ⠀•••• 2000',
          amount: 654.39,
        },
        {
          id: 5,
          date: '2019 /03 / 1',
          name: 'Bruce Springsteen',
          shipTo: 'Long Branch, NJ',
          paymentMethod: 'VISA ⠀•••• 5919',
          amount: 212.79,
        },
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Dashboard: StoryObj<typeof meta> = {};
