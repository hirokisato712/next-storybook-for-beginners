'use client';

import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { employeeData } from './types';

export default function employees({ data }: Readonly<employeeData>) {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" className="flex items-center justify-center">
        社員・協力会社
      </Typography>
      社員一覧 協力会社一覧
      <Paper className="relative h-[330px] w-full p-2">
        <div>
          <Typography component="h2" variant="h6" color="primary" gutterBottom className="flex items-end justify-end">
            社員を登録
          </Typography>
        </div>
        <div>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>社員名</TableCell>
                  <TableCell>メールアドレス</TableCell>
                  <TableCell>電話番号</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.number}</TableCell>
                    <TableCell>編集</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </>
  );
}
