import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import FeedbackTable from "./FeedbackTable";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function CoordinatorDetails() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", marginTop: "5rem" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Student Feedback" {...a11yProps(0)} />
                    <Tab label="Volunteer Feedback" {...a11yProps(1)} />
                    <Tab label="Coordinator Feedback" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <FeedbackTable feedbackType="studentFeedbacks" />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FeedbackTable feedbackType="volunteerFeedbacks" />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <FeedbackTable feedbackType="coordinatorFeedbacks" />
            </CustomTabPanel>
        </Box>
    );
}
