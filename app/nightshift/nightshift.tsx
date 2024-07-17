'use client';

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

import { NightShiftDate } from './type';

export default function NightShift({ nightshift }: Readonly<{ nightshift: NightShiftDate }>) {
  const nowDate = new Date();
  return (
    <>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="flex h-24 items-center justify-center font-bold"
      >
        夜間勤務集計
      </Typography>
      <div className="flex h-12 items-center bg-indigo-50 text-xl">
        <p className="text-gray-400">集計期間 :</p>
        <p>
          {nowDate.getFullYear()}/{nowDate.getMonth() + 1}/01 ~ {nowDate.getFullYear()}/{nowDate.getMonth() + 1}/
          {nowDate.getDate()}
        </p>
      </div>

      <Paper className="w-full p-2">
        <TableContainer className="table-auto">
          <Table size="small">
            <TableHead>
              <TableRow className="">
                <TableCell className="font-semibold text-blue-800">社員名</TableCell>
                <TableCell className="font-semibold text-blue-800">夜間勤務日数</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nightshift.data.map((data) => (
                <TableRow key={data.name}>
                  <TableCell className="text-xl font-medium">{data.name}</TableCell>
                  <TableCell className="text-xl font-medium">{data.count}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
