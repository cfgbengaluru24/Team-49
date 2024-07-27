
import "./Assessment.css";
import Taskcard from "../taskcard/Taskcard";

const Assessment = () => {
    return (
        <div className="assess">
            <div className="heading">Your assessments</div>
            <div className="items">
                <Taskcard type={'worksheet'} extra={'Contains questions from last class, make sure to revise before attempting.'} heading={'Lights and Shadows'} link={'https://mui.com/material-ui/react-card/'} />
                <Taskcard type={'Google Form'} extra={'This is physics worksheet'} heading={'Lights and Shadows'} link={'https://mui.com/material-ui/react-card/'} isCompleted />
                <Taskcard type={'worksheet'} extra={'This is physics worksheet'} heading={'Lights and Shadows'} link={'https://mui.com/material-ui/react-card/'} isCompleted />
                <Taskcard type={'worksheet'} extra={'This is physics worksheet'} heading={'Lights and Shadows'} link={'https://mui.com/material-ui/react-card/'} isCompleted />
            </div>
        </div>
    );
};

export default Assessment;
