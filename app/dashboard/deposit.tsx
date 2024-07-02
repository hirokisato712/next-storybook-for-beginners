'use client';

import { Card, CardContent, Typography } from '@mui/material';

import './chart.css';
import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  console.log(data);
  return (
    // <Paper className="flex h-48 p-2">
    //   <Typography component="h2" variant="h6" color="primary" gutterBottom>
    //     Recent Deposits
    //   </Typography>
    // </Paper>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Deposits
        </Typography>
        <Typography
          //   dataset={data}
          component="h1"
          variant="h3"
        >
          $
          {data.amount
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Typography>
        <Typography
          //   dataset={data}
          component="h5"
          variant="h5"
        >
          on {new Date(data.date).getDate()}{' '}
          {new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(data.date).getMonth())}{' '}
          {new Date(data.date).getFullYear()}
        </Typography>
        <div className="chart-label w-full flex-grow overflow-hidden">View blance</div>
      </CardContent>
    </Card>
  );
}
