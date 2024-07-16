import { ComponentProps } from 'react';

import { api } from 'lib/api';

import SettingHoliday from './settingholiday';

export default async function Page() {
  const settingholiday = await getSettingHoliday();
  return <SettingHoliday settingholiday={settingholiday} />;
}

async function getSettingHoliday() {
  const month = new Date().getMonth() + 1;
  return await api<ComponentProps<typeof SettingHoliday>['settingholiday']>('setting/holiday?month=' + month);
}
