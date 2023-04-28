import React, { Fragment } from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import {Button,styled, useTheme }  from '@mui/material'
import { Link } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';

const headCells = [
  {
    id: 'id',
    numeric: false,
    label: 'ID',
  },
  {
    id: 'status',
    numeric: false,
    label: 'Status',
  },
  {
    id: 'startedDate',
    numeric: false,
    label: 'Started',
  },
  {
    id: 'finishedDate',
    numeric: true,
    label: 'Finished',
  },
  {
    id: 'score',
    numeric: false,
    label: 'Score',
  },
  {
    id: 'processingTime',
    numeric: false,
    label: 'Created Date',
  },
];

const dataTable = [
  {
    id: '1',
    status: 'Done',
    startedDate: '07:38 - 21/06/2022',
    finishedDate: '19:38 - 25/06/2022',
    score: '5',
    processingTime: '70 Minutes',
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function RowItem(props) {
  const [openCell, setOpenCell] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item.id}</TableCell>
        <TableCell align="center">{props.item.status}</TableCell>
        <TableCell align="center">{props.item.startedDate}</TableCell>
        <TableCell align="center">{props.item.finishedDate}</TableCell>
        <TableCell align="center">{props.item.score}</TableCell>
        <TableCell align="center">{props.item.processingTime}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const DetailEngineerPerformance = () => {
  const theme=useTheme()
  const [roleMember, setRoleMember] = React.useState('ALL');

  React.useEffect(() => {
    document.title = 'Detail Engineer Performance';
  }, []);

  const ToggleButton = styled(MuiToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: '#000000 !important',
      backgroundColor: '#F5B6FF',
    },
  });

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Container>
      <h1>Performance of "Name of Users"</h1>
      <br/>
      <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : 'none' }}>
             <Table stickyHeader sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              {/* Table Header */}
              <TableHead>
                <TableRow>
                {/* {rowsPerPage.filter((e)=>{
                return roleMember==='ALL'?true: e.role===roleMember 
                }
                )  */}
                  {headCells.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      align={headCell.numeric ? 'center' : 'center'}
                      sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                          active={orderBy === headCell.id}
                          direction={orderBy === headCell.id ? order : 'asc'}
                          onClick={(event) => {
                            handleRequestSort(event, headCell.id);
                          }}
                          style={{ fontWeight: 'bold' }}
                        >
                          {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                  )  )}
                </TableRow>
              </TableHead>   
              {/* Table Content */}
              <TableBody>   
                {stableSort(dataTable.filter((e)=>{
              // return true
              return roleMember==='ALL'?true: e.role===roleMember
            // if(e.status===statusTicket)
            }), getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowItem, index) => {
                    return <RowItem key={rowItem.code} item={rowItem} />;
                  })}
              </TableBody>
            </Table>
          </TableContainer>
      {/* Table Pagination */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <span>
          <Button sx={{ width: 'max-content' }}>Pagination 1 (1-100)</Button>
        </span>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={dataTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            [theme.breakpoints.up('sm')]: { justifyContent: 'right' },
          }}
        />
      </Box>
    </Container>
  )
}

export default DetailEngineerPerformance
