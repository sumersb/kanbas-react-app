import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentMove from "./AssignmentMove";
import LessonControlButtons from "./LessonControlButton";
import AssignmentInfo from "./AssignmentInfo";
import "./index.css"
import { useParams } from "react-router";
import * as db from "../../Database"
import Date from "./Date";




export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <AssignmentControls /><br></br><br></br>
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border">
                    <div className="wd-title p-3 ps-2 bg-white">
                        <BsGripVertical className="me-2 fs-3" />
                        <span className="fs-3">Assignments</span>
                        <AssignmentInfo />

                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment) => assignment.course === cid)
                            .map((assignment) =>
                                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                    <AssignmentMove />
                                    <p className="flex-grow-1">
                                        <a className="text-decoration-none text-dark fw-bold wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                        <br></br>
                                        <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {Date.getMonthString(assignment.release_date)} {Date.getDay(assignment.release_date)} at 11:59pm<br></br>
                                        <b>Due</b> {Date.getMonthString(assignment.due_date)} {Date.getDay(assignment.due_date)} at 11:59pm | {assignment.points}pts
                                    </p>
                                    <LessonControlButtons />
                                </li>
                            )}
                    </ul>
                </li>
            </ul>

        </div>
    );
}



// <a className="wd-assignment-link"
