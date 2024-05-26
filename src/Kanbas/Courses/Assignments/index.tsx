import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentMove from "./AssignmentMove";
import LessonControlButtons from "./LessonControlButton";
import AssignmentInfo from "./AssignmentInfo";
import "./index.css"
import { useParams } from "react-router";
import * as db from "../../Database"




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
                        {/* {assignments
                            .filter( (assignment) => assignment.course === cid )
                            .map(assi)} */}
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <AssignmentMove />
                            <p className="flex-grow-1">
                                <a className="text-decoration-none text-dark fw-bold wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1
                                </a>
                                <br></br>
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am<br></br>
                                <b>Due</b> May 13 at 11:59pm | 100pts
                            </p>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <AssignmentMove />
                            <p className="flex-grow-1">
                                <a className="text-decoration-none text-dark fw-bold wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A2
                                </a>
                                <br></br>
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am<br></br>
                                <b>Due</b> May 13 at 11:59pm | 100pts
                            </p>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <AssignmentMove />
                            <p className="flex-grow-1">
                                <a className="text-decoration-none text-dark fw-bold wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A3
                                </a>
                                <br></br>
                                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am<br></br>
                                <b>Due</b> May 120 at 11:59pm | 100pts
                            </p>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}



// <a className="wd-assignment-link"
