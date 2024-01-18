import React, { useState, useEffect } from 'react';
import { Paper, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination } from '@mui/material';
import { Virtuoso } from 'react-virtuoso';

// fake data generator
const generateFakeData = (numEntries) => {
	const data = [];
	for (let i = 0; i < numEntries; i++) {
	  data.push({
		id: i,
		user: `User ${i}`,
		date: `2024-01-${String(i % 31).padStart(2, '0')}`,
		changeSummary: `Change ${i}`,
	  });
	}
	return data;
  };

  const fakeDatabase = {
	data: generateFakeData(100),
  
	fetchData: function(page, itemsPerPage) {
	  return new Promise((resolve) => {
		const startIndex = (page - 1) * itemsPerPage;
		const pageData = this.data.slice(startIndex, startIndex + itemsPerPage);
		setTimeout(() => resolve(pageData), 500); // simulated network delay
	  });
	}
  };

const itemsPerPage = 10;

const ChangelogRow = ({ row }) => {
  return (
    <TableRow key={row.id}>
      <TableCell>{row.user}</TableCell>
      <TableCell>{row.date}</TableCell>
      <TableCell>{row.changeSummary}</TableCell>
    </TableRow>
  );
};

const Changelog = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
	const fetchData = async () => {
	  const pageData = await fakeDatabase.fetchData(page, itemsPerPage);
	  setData(pageData);
	  setPageCount(Math.ceil(fakeDatabase.data.length / itemsPerPage));
	};
  
	fetchData();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Stack spacing={1}>
      <Typography variant="h2">Changelog</Typography>
      <Paper sx={{ p: 2, overflow: 'auto' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Change Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <ChangelogRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}
        />
      </Paper>
    </Stack>
  );
};

export default Changelog;