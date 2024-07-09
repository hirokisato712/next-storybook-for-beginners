'use client';

import AddIcon from '@mui/icons-material/Add';
import {
  Avatar,
  Button,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';

import { employeeData } from './type';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      height: 20,
      width: 20,
    },
    children: `${name.split(' ')[0][0]}`,
  };
}
export default function employees({ data }: Readonly<employeeData>) {
  return (
    <>
      <Typography component="h1" variant="h6" color="primary" className="flex items-center justify-center font-bold">
        社員・協力会社
      </Typography>
      <Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="full width tabs example">
        <Tab label="社員一覧" />
        <Tab label="協力会社" />
      </Tabs>
      <Paper className="relative w-full p-2">
        <div className="flex items-end justify-end">
          <Button variant="contained" endIcon={<AddIcon />}>
            社員を登録
          </Button>
        </div>
        <div>
          <TableContainer className="table-auto">
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="font-semibold text-blue-800">社員名</TableCell>
                  <TableCell className="font-semibold text-blue-800">メールアドレス</TableCell>
                  <TableCell className="font-semibold text-blue-800">電話番号</TableCell>
                  <TableCell className=""></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-semibold">
                      <div className="flex items-center">
                        <Avatar {...stringAvatar(row.name)} />
                        <p className="m-0 pl-4">{row.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{row.email}</TableCell>
                    <TableCell className="font-semibold">{row.number}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outlined">編集</Button>
                    </TableCell>
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
