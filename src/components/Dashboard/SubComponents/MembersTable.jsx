import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'

const MembersTable = ({members}) => {
  return(
    <div className="members-table-container">
      <Table>
      <TableHead className="members-table-head">
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>City</TableCell>
          <TableCell>State</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className="members-table-body">
        {members.map(row => {
          return (
            <TableRow key={row.id}>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.state}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </div>
  )


}

export default MembersTable
