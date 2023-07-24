import  './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const rows=[
    {
        No:1,
        Id_customer:"#00213",
        Customer_name:"Andrew Mark",
        Item_name: "1 X Black Pepper",
        Order_Date:'21/02/2023 02:30',
        Status:"Paid",
        Price:"$101",
    },
    {
        No:2,
        Id_customer:"#00213",
        Customer_name:"Andrew Mark",
        Item_name: "1 X Black Pepper",
        Order_Date:'21/02/2023 02:30',
        Status:"Pending",
        Price:"$101"
    },
    {
        No:3,
        Id_customer:"#00213",
        Customer_name:"Andrew Mark",
        Item_name: "1 X Black Pepper",
        Order_Date:'21/02/2023 02:30',
        Status:"Overdue",
        Price:"$101"
    }

]


function TableData() {
  return (
    <div className='table'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Id Customer</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Items Name</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.No}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="Tablecell">{row.No}</TableCell>
              <TableCell className="Tablecell">{row.Id_customer}</TableCell>
              <TableCell className="Tablecell">{row.Customer_name}</TableCell>
              <TableCell className="Tablecell">{row.Item_name}</TableCell>
              <TableCell className="Tablecell">{row.Order_Date}</TableCell>
              <TableCell className="Tablecell"><span className={`status ${row.Status}`}>{row.Status}</span></TableCell>
              <TableCell className="Tablecell">{row.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TableData
