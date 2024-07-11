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

import { AggregateDate } from './type';

export default function Aggregate({ aggregate }: Readonly<{ aggregate: AggregateDate }>) {
  console.log(aggregate.data);
  return (
    <>
      <Typography component="h1" variant="h6" color="primary" className="flex items-center justify-center font-bold">
        工数集計
      </Typography>
      <FormControl className="mb-2 h-8 flex-row gap-2">
        <Select className="h-8 w-32">
          <MenuItem value={0}>2024年</MenuItem>
          <MenuItem value={0}>2023年</MenuItem>
          <MenuItem value={0}>2022年</MenuItem>
        </Select>
        <Select className="h-8 w-32">
          <MenuItem value={0}>1月</MenuItem>
          <MenuItem value={0}>2月</MenuItem>
          <MenuItem value={0}>3月</MenuItem>
          <MenuItem value={0}>4月</MenuItem>
          <MenuItem value={0}>5月</MenuItem>
          <MenuItem value={0}>6月</MenuItem>
          <MenuItem value={0}>7月</MenuItem>
          <MenuItem value={0}>8月</MenuItem>
          <MenuItem value={0}>9月</MenuItem>
          <MenuItem value={0}>10月</MenuItem>
          <MenuItem value={0}>11月</MenuItem>
          <MenuItem value={0}>12月</MenuItem>
        </Select>
        <Button variant="outlined" className="h-auto w-10">
          表示
        </Button>
      </FormControl>
      <Paper className="w-full p-2">
        <TableContainer className="table-auto">
          <Table size="small">
            <TableHead>
              <TableRow className="">
                <TableCell className="w-2/5 font-semibold text-blue-800">現場名</TableCell>

                <TableCell className="font-semibold text-blue-800">現場開始日時</TableCell>
                <TableCell className="font-semibold text-blue-800">現場最終日時</TableCell>
                <TableCell className="font-semibold text-blue-800">対象月の工数</TableCell>
                <TableCell className="font-semibold text-blue-800">総工数</TableCell>
                <TableCell className=""></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {aggregate.data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className="w-60 font-bold">{row.name}</TableCell>

                  <TableCell className="font-bold">{row.startAt.replaceAll('-', '/')}</TableCell>
                  <TableCell className="font-bold">{row.endAt.replaceAll('-', '/')}</TableCell>
                  <TableCell className="font-bold">{row.manHour}</TableCell>
                  <TableCell className="font-bold">{row.totalManHour}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
