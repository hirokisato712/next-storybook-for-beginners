import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Employees from './employees';

export default async function Page() {
  const employees = await getEmployee();
  return <Employees employee={employees} />;
}

async function getEmployee() {
  return await api<ComponentProps<typeof Employees>['employee']>('employee');
}
