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
        <Card sx={{ width: "280px", alignSelf: "start" }}>
            <CardContent sx = {{
                display: 'flex',
                flexDirection: 'column',
            }}>
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
                    <Box sx={{ display: "flex", gap: "5px" }}>
                        {isCompleted ? <Done /> : <Pending />}
                        {type}
                    </Box>
                </Typography>
                <Typography sx={{ textAlign: "left" }} variant="h5">
                    {heading}
                </Typography>
                <Typography sx={{ textAlign: "left", textWrap: "wrap" }} variant="body2">
                    {extra}
                </Typography>
            </CardContent>
            {isCompleted?<Typography sx={{ color: "green", width: "100%", textAlign: "left", paddingLeft: 2, fontWeight: "bold" }}>Score: {marks}%</Typography>:<Typography sx={{ color: "orange", width: "100%", textAlign: "left", paddingLeft: 2, fontWeight: "bold" }}>Test pending</Typography>}
            <CardActions>
                <Button href={link} target="_blank" rel="noopener noreferrer" size="small">
                    Open Task
                </Button>
            </CardActions>
        </Card>
    );
}
