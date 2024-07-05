'use client';

import { Assignment, BarChart, Dashboard, Layers, People, ShoppingCart } from '@mui/icons-material';
import { List } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <List component="nav">
      <ListItemButton component={NextLink} href="/dashboard" selected={pathname === '/dashboard'}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Order" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
      <Divider component="li" />
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'} disabled={true}>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Saved reports" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </List>
  );
}
