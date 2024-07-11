import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Aggregate from './aggregate';

export default async function Page() {
  const aggregate = await getAggregate();
  console.log(aggregate);
  return <Aggregate aggregate={aggregate} />;
}

async function getAggregate() {
  const data = new Date()
    .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replaceAll('/', '-');
  return await api<ComponentProps<typeof Aggregate>['aggregate']>('aggregate/manhour/' + data);
}
