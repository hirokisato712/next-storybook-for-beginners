import { ComponentProps } from 'react';

import { api } from 'lib/api';

import PaidVacation from './paidvacation';

export default async function Page() {
  const paidvacation = await getPaidVacation();
  return <PaidVacation paidvacation={paidvacation} />;
}

async function getPaidVacation() {
  const data = new Date()
    .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replaceAll('/', '-');
  return await api<ComponentProps<typeof PaidVacation>['paidvacation']>('aggregate/paidvacation');
}
