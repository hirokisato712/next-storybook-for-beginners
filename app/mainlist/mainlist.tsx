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
import * as React from 'react';

import { EmployeeData, PartnerData } from './type';

function colorCode(color: string) {
  const colors = 'bg-[' + color + ']';
  return colors;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
function allProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function MainList({ employee, partner }: Readonly<{ employee: EmployeeData; partner: PartnerData }>) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography component="h1" variant="h6" color="primary" className="flex items-center justify-center font-bold">
        社員・協力会社
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs example"
      >
        <Tab label="社員一覧" {...allProps(0)} />
        <Tab label="協力会社" {...allProps(1)} />
      </Tabs>
      <Paper className="p-2">
        <TabPanel value={value} index={0}>
          <div className="flex flex-row-reverse">
            <Button variant="contained" endIcon={<AddIcon />}>
              社員を登録
            </Button>
          </div>
          <TableContainer>
            <Table size="small" className="">
              <TableHead>
                <TableRow className="">
                  <TableCell className="w-1/3 font-semibold text-blue-800">社員名</TableCell>
                  <TableCell className="w-1/3 font-semibold text-blue-800">メールアドレス</TableCell>
                  <TableCell className="w-1/3 font-semibold text-blue-800">電話番号</TableCell>
                  <TableCell className=""></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employee.data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-semibold">
                      <div className="flex items-center">
                        <Avatar className={colorCode(row.color)}>{row.initial}</Avatar>
                        <p className="m-0 pl-4">{row.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{row.email}</TableCell>
                    <TableCell className="font-semibold">{row.phone}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outlined">編集</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex flex-row-reverse">
            <Button variant="contained" endIcon={<AddIcon />}>
              協力会社を登録
            </Button>
          </div>
          <TableContainer>
            <Table size="small" className="">
              <TableHead>
                <TableRow>
                  <TableCell className="w-1/2 font-semibold text-blue-800">協力会社名</TableCell>
                  <TableCell className="w-1/2 font-semibold text-blue-800">電話番号</TableCell>
                  <TableCell className=""></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {partner.data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-semibold">
                      <div className="flex items-center">
                        <Avatar>{row.initial}</Avatar>
                        <p className="m-0 pl-4">{row.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{row.phone}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outlined">編集</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>
    </>
  );
}
