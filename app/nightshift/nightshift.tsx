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
  return (
    <>
      <Typography component="h1" variant="h6" color="primary" className="flex items-center justify-center font-bold">
        夜間勤務集計
      </Typography>

      <Paper className="w-full p-2">
        <TableContainer className="table-auto">
          <Table size="small">
            <TableHead>
              <TableRow className="">
                <TableCell className="font-semibold text-blue-800">社員名</TableCell>
                <TableCell className="font-semibold text-blue-800">夜間勤務日数</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nightshift.data.map((data) => (
                <TableRow key={data.name}>
                  <TableCell className="font-semibold">{data.name}</TableCell>
                  <TableCell className="font-semibold">{data.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
