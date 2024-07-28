
import "./Assessment.css";
import Taskcard from "../taskcard/Taskcard";

const Assessment = () => {
    return (
        <div className="assess">
            <div className="heading">Your assessments</div>
            <div className="items">
                <Taskcard type={'worksheet'} extra={'Contains questions from last class, make sure to revise before attempting.'} heading={'Communication skills'} link={'https://static.islcollective.com/storage/preview/201308/766x1084/some-any-quiz-tests_56818_4.jpg'} />
                <Taskcard type={'Google Form'} extra={'Test mainly focussing on calculation of refractive indices.'} heading={'Lights and Shadows'} link={'https://static.islcollective.com/storage/preview/201308/766x1084/some-any-quiz-tests_56818_4.jpg'} isCompleted />
            </div>
        </div>
    );
};

export default Assessment;
