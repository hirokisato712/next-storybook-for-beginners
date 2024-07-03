'use client';

import { Card, CardContent, Link, Typography } from '@mui/material';

import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Card sx={{ minWidth: 215, minHeight: 300 }} className="relative">
      <CardContent>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Deposits
        </Typography>
        <Typography component="h1" variant="h3">
          $
          {data.amount
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Typography>
        <Typography component="h5" variant="h5" color="silver">
          on {new Date(data.date).getDate()}{' '}
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(data.date))}{' '}
          {new Date(data.date).getFullYear()}
        </Typography>
      </CardContent>
      <div className="absolute bottom-1 left-2">
        <Link href="#">View blance</Link>
      </div>
    </Card>
  );
}
