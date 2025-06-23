"use client";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
  Typography,
} from "@mui/material";

const TheoryPractical = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Dummy student data
  const students = [
    { id: 1, name: "John Doe", status: "theory" },
    { id: 2, name: "Jane Smith", status: "theory" },
    { id: 3, name: "Mark Johnson", status: "practical" },
    { id: 4, name: "Lucy Brown", status: "theory" },
    { id: 5, name: "David Green", status: "practical" },
    { id: 6, name: "Sally Gold", status: "theory" },
  ];

  const filteredStudents = students.filter(
    (student) =>
      (tabIndex === 0 && student.status === "theory") ||
      (tabIndex === 1 && student.status === "practical")
  );

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Student Status
        </Typography>

        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Not Started Practical" />
          <Tab label="In Practical" />
        </Tabs>

        <TableContainer sx={{ mt: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                {tabIndex === 0 && <TableCell><strong>Action</strong></TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.status}</TableCell>
                    {tabIndex === 0 && (
                      <TableCell>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          Move to Practical
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredStudents.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TheoryPractical;
