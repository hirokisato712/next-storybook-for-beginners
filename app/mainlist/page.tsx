import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Mainlist from './mainlist';

export default async function Page() {
  const employees = await getEmployee();
  const partner = await getPartner();
  return <Mainlist employee={employees} partner={partner} />;
}

async function getEmployee() {
  return await api<ComponentProps<typeof Mainlist>['employee']>('employee');
}
async function getPartner() {
  return await api<ComponentProps<typeof Mainlist>['partner']>('partner');
}
