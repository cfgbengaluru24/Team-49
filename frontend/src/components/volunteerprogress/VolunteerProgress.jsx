import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box, TextField } from "@mui/material";

function createData(date, timeslot, student, subject, topic) {
    return { date, timeslot, student, subject, topic };
}

const rows = [
    createData("29/07/2024", "11:50PM - 12:45PM", "Bob Ross", "Communication skills", "Lesson 1: Talking confidently"),
    createData("29/07/2024", "12:50PM - 01:45PM", "Bob Dylan", "Mathematics", "Lesson 4: Algebra"),
    createData("05/08/2024", "03:45PM - 04:45PM", "Nina Scott", "Science", "Lesson 3: Chemistry Basics"),
    createData("06/08/2024", "10:00AM - 11:00AM", "Oscar Hall", "History", "Lesson 4: Ancient Civilizations"),
    createData("06/08/2024", "11:15AM - 12:15PM", "Paul Adams", "Literature", "Lesson 6: Poetry Analysis"),
    createData("07/08/2024", "01:00PM - 02:00PM", "Quinn Baker", "Geography", "Lesson 2: Climate Zones"),
    createData("07/08/2024", "02:15PM - 03:15PM", "Rachel Carter", "Art", "Lesson 4: Sculpture Techniques"),
    createData("08/08/2024", "09:00AM - 10:00AM", "Sammy Harris", "Biology", "Lesson 5: Human Anatomy")
];

export default function VolunteerProgress() {
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
                gap: 2
            }}
        >
            <Typography variant="h6">Your classes</Typography>
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
                            <TableCell align="right">Student</TableCell>
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
                                <TableCell align="right">{row.student}</TableCell>
                                <TableCell align="right">{row.subject}</TableCell>
                                <TableCell align="right">{row.topic}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
