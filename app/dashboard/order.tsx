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

import { OrderData } from './types';

export default function Deposit({ data }: Readonly<OrderData>) {
  return (
    <Paper className="relative h-[330px] w-full p-2">
      <div>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Orders
        </Typography>
      </div>
      <div>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ship To</TableCell>
                <TableCell>PaymentMethod</TableCell>
                <TableCell className="text-right">Sale Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {' '}
                    {new Date(row.date).getDate()}{' '}
                    {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(row.date))}
                    {', '}
                    {new Date(row.date).getFullYear()}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    $
                    {row.amount
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="absolute bottom-1 left-3">
        <Link href="#">See more orders</Link>
      </div>
    </Paper>
  );
}
