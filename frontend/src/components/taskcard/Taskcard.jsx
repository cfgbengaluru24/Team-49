import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { Done, Pending } from "../../assets/svgvectors";

const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
    </Box>
);

export default function Taskcard({ type, heading, extra, link, isCompleted = false, marks = 12 }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{
                        fontSize: 14,
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    color="text.secondary"
                    gutterBottom
                >
                    <Box sx={{display: 'flex', gap: "5px"}}>
                        {isCompleted ? <Done /> : <Pending />}
                        {type}
                    </Box>
                    {isCompleted && <Typography sx={{color: "green"}}>{marks}%</Typography>}
                </Typography>
                <Typography sx={{ textAlign: "left" }} variant="h5">
                    {heading}
                </Typography>
                <Typography sx={{ textAlign: "left" }} variant="body2">
                    {extra}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={link} target="_blank" rel="noopener noreferrer" size="small">
                    Open Task
                </Button>
            </CardActions>
        </Card>
    );
}
