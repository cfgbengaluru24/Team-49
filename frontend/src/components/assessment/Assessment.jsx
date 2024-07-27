import React from "react";
import "./Assessment.css";
import Taskcard from "../taskcard/Taskcard";

const Assessment = () => {
    return (
        <div className="assess">
            <div className="heading">Your assessments</div>
            <div className="items">
                <Taskcard type={'worksheet'} extra={'This is physics worksheet'} heading={'Lights and Shadows'} link={'https://mui.com/material-ui/react-card/'} />
                <Taskcard type={'worksheet'} extra={'This is physics worksheet'} heading={'Lights and Shadows'} link={'https://mui.com/material-ui/react-card/'} isCompleted />
            </div>
        </div>
    );
};

export default Assessment;
