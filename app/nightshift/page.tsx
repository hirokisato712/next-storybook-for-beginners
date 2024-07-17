import { ComponentProps } from 'react';

import { api } from 'lib/api';

import NightShift from './nightshift';

export default async function Page() {
  const nightshift = await getNightShift();
  return <NightShift nightshift={nightshift} />;
}

async function getNightShift() {
  return await api<ComponentProps<typeof NightShift>['nightshift']>('aggregate/nightshift');
}
