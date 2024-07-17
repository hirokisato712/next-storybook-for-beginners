'use client';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { PaidVacationDate } from './type';

function formatDate(data: string) {
  const formattedDate = new Date(data)
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replaceAll('/', '-');
  return formattedDate;
}

export default function PaidVacation({ paidvacation }: Readonly<{ paidvacation: PaidVacationDate }>) {
  const nowData = new Date();
  return (
    <>
      <Typography
        component="h1"
        variant="h6"
        color="primary"
        className="flex h-24 items-center justify-center font-bold"
      >
        有給休暇集計
      </Typography>
      <Paper className="w-full p-2">
        <TableContainer className="table-auto">
          <Table size="small">
            <TableHead>
              <TableRow className="justify-around">
                <TableCell className="font-semibold text-blue-800">社員名</TableCell>
                <TableCell />
                <TableCell className="font-semibold text-blue-800">集計期間</TableCell>
                <TableCell className="font-semibold text-blue-800">有給取得日数</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paidvacation.data.map((data) => (
                <TableRow key={data.name}>
                  <TableCell className="text-xl font-medium">{data.name}</TableCell>
                  <TableCell />
                  <TableCell className="text-xl font-medium">
                    {formatDate(data.aggregationPeriod)} ~ {formatDate(nowData.toLocaleDateString())}
                  </TableCell>
                  <TableCell className="text-xl font-medium">{data.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
