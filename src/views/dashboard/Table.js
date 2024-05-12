import React from 'react';
import { Card, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Chip, Typography } from '@mui/material';

const rows = [
  {
    from: "+13051416799",
    to: "+13051913581",
    price: "0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
  },
  {
    from: "+1234567890",
    to: "+0987654321",
    price: "0.150",
    duration: "7",
    start_time: "Sat, 19 Oct 2019 10:30:00 +0000",
    end_time: "Sat, 19 Oct 2019 10:37:00 +0000",
    status: "applied",
    date_created: "Sat, 19 Oct 2019 10:25:00 +0000",
  },
  {
    from: "+9876543210",
    to: "+1234567890",
    price: "0.300",
    duration: "10",
    start_time: "Sun, 20 Oct 2019 15:45:00 +0000",
    end_time: "Sun, 20 Oct 2019 15:55:00 +0000",
    status: "rejected",
    date_created: "Sun, 20 Oct 2019 15:40:00 +0000",
  },
  {
    from: "+13051416799",
    to: "+13051913581",
    price: "0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
  },
  {
    from: "+1234567890",
    to: "+0987654321",
    price: "0.150",
    duration: "7",
    start_time: "Sat, 19 Oct 2019 10:30:00 +0000",
    end_time: "Sat, 19 Oct 2019 10:37:00 +0000",
    status: "applied",
    date_created: "Sat, 19 Oct 2019 10:25:00 +0000",
  },
  {
    from: "+9876543210",
    to: "+1234567890",
    price: "0.300",
    duration: "10",
    start_time: "Sun, 20 Oct 2019 15:45:00 +0000",
    end_time: "Sun, 20 Oct 2019 15:55:00 +0000",
    status: "rejected",
    date_created: "Sun, 20 Oct 2019 15:40:00 +0000",
  },
  {
    from: "+9876543210",
    to: "+13051416799",
    price: "0.180",
    duration: "5",
    start_time: "Mon, 21 Oct 2019 09:15:00 +0000",
    end_time: "Mon, 21 Oct 2019 09:20:00 +0000",
    status: "current",
    date_created: "Mon, 21 Oct 2019 09:10:00 +0000",
  },
  {
    from: "+13051913581",
    to: "+9876543210",
    price: "0.250",
    duration: "8",
    start_time: "Tue, 22 Oct 2019 14:00:00 +0000",
    end_time: "Tue, 22 Oct 2019 14:08:00 +0000",
    status: "resigned",
    date_created: "Tue, 22 Oct 2019 13:55:00 +0000",
  },
];

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  completed: { color: 'success' }
}

const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);

  return date.toLocaleString(); // Adjust locale and options as needed
};

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {rows.map((row, index) => (
              <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.from}</TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{formatDate(row.start_time)}</TableCell>
                <TableCell>{formatDate(row.end_time)}</TableCell>
                <TableCell>{formatDate(row.date_created)}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default DashboardTable;
