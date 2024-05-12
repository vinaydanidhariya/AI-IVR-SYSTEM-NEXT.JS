// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },
  {
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },{
    from: "+13051416799",
    to: "+13051913581",
    price: "-0.200",
    duration: "4",
    start_time: "Fri, 18 Oct 2019 17:02:00 +0000",
    end_time: "Fri, 18 Oct 2019 17:03:00 +0000",
    status: "completed",
    date_created: "Fri, 18 Oct 2019 17:00:00 +0000",
    date_updated: "Fri, 18 Oct 2019 17:01:00 +0000",
  },
];


const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  completed: { color: 'success' }
}

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
              <TableCell>start_time</TableCell>
              <TableCell>end_time</TableCell>
              <TableCell>date_created</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.from} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.to}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.start_time}</TableCell>
                <TableCell>{row.end_time}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}

                    // color={statusObj[row.status].color}
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
  )
}

export default DashboardTable
