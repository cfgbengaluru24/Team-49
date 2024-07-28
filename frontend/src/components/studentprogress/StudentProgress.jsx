// StudentProgress.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Box, TextField } from '@mui/material';
import rows from '../../assets/student.json'; // Import the JSON file

export default function StudentProgress() {
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredRows = rows.filter((row) =>
        row.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: 'column',
                gap: 1
            }}
        >
            <Typography variant="h6">Your progress</Typography>
            <TextField
                label="Search by subject"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ marginBottom: 2 }}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Time slot</TableCell>
                            <TableCell align="right">Volunteer</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">Topics covered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.map((row) => (
                            <TableRow key={row.date} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="right">{row.timeslot}</TableCell>
                                <TableCell align="right">{row.volunteer}</TableCell>
                                <TableCell align="right">{row.subject}</TableCell>
                                <TableCell align="right">{row.topics}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
