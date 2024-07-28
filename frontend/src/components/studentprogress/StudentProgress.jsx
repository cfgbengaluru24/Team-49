import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box, TextField } from "@mui/material";

function createData(date, timeslot, volunteer, subject, topics) {
    return { date, timeslot, volunteer, subject, topics };
}

const rows = [
    createData("29/07/2024", "11:50PM - 12:45PM", "Bob Ross", "Communication skills", "Lession 1: Talking confidently"),
    createData("29/07/2024", "12:50PM - 01:45PM", "Bob Dylan", "Mathematics", "Lession 4: Algebra"),
    createData("03/08/2024", "08:00AM - 09:00AM", "Ivy White", "Physical Education", "Lesson 2: Yoga Basics"),
    createData("03/08/2024", "09:30AM - 10:30AM", "Jack Black", "Music", "Lesson 6: Classical Composers"),
    createData("04/08/2024", "11:00AM - 12:00PM", "Karen Hill", "Chemistry", "Lesson 7: Organic Chemistry"),
];

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
