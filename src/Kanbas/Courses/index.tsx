import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import MinimizeModule from "./MinimizeModule";
import { courses } from "../Database"

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid)
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <div className="d-none d-md-block">
        <h2 className="text-danger d-none d-md-block"><FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name}  &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
      </div>
      <MinimizeModule />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div >

  );
}
