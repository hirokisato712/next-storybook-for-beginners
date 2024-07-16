import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { SettingHolidayDate } from './type';

function holidayTable(str: string, settingholiday: SettingHolidayDate) {
  {
    return (
      <div className="grid grid-cols-4">
        <Typography component="h1" variant="h6" className="flex font-bold">
          {str}
        </Typography>
        <Paper className="col-span-3 w-full">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="w-1/5 font-semibold text-blue-800">日付</TableCell>
                  <TableCell className="font-semibold text-blue-800">休日名</TableCell>
                  <TableCell className=""></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {settingholiday.data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-semibold">{row.date}</TableCell>
                    <TableCell className="font-semibold">{row.name}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outlined">編集</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}

export default function SettingHoliday({ settingholiday }: Readonly<{ settingholiday: SettingHolidayDate }>) {
  const currentYear = new Date().getFullYear().toString();
  const tableA = settingholiday.data.filter((row) => row.isNationalHoliday);
  const tableB = settingholiday.data.filter((row) => !row.isNationalHoliday);
  const holidayTableA = holidayTable('公休', { data: tableA });
  const holidayTableB = holidayTable('祝日', { data: tableB });
  return (
    <div className="grid gap-3">
      <Typography component="h1" variant="h6" color="primary" className="flex justify-center font-bold">
        カレンダーの休日設定
      </Typography>
      <div className="flex h-8 flex-row justify-between">
        <FormControl className="flex h-8 flex-row gap-3">
          <Select className="h-8 w-32" defaultValue={currentYear}>
            <MenuItem value={currentYear} selected>
              {currentYear}年
            </MenuItem>
            <MenuItem value={(parseInt(currentYear) - 1).toString()}>{parseInt(currentYear) - 1}年</MenuItem>
            <MenuItem value={(parseInt(currentYear) - 2).toString()}>{parseInt(currentYear) - 2}年</MenuItem>
          </Select>
          <Button variant="outlined" className="h-auto w-10">
            表示
          </Button>
        </FormControl>
        <Button variant="contained" className="" endIcon={<AddIcon />}>
          休日を登録
        </Button>
      </div>
      <div className="grid gap-5">
        {holidayTableA}
        {holidayTableB}
      </div>
    </div>
  );
}
