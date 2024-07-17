import { ComponentProps } from 'react';

import { api } from 'lib/api';

import DefaultAssign from './defaultassign';

export default async function Page() {
  const defaultAssign = await getDefaultAssign();
  return <DefaultAssign defaultAssign={defaultAssign} />;
}

async function getDefaultAssign() {
  return await api<ComponentProps<typeof DefaultAssign>['defaultAssign']>('setting/defaultassign');
}
