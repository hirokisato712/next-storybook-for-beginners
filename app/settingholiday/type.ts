export interface SettingHolidayDate {
  data: {
    id: number;
    date: string;
    name: string;
    isNationalHoliday: boolean;
  }[];
}
