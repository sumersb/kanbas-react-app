import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import MinimizeModule from "./MinimizeModule";

export default function Courses() {
  return (
    <div id="wd-courses">
      <div className="d-none d-md-block">
        <h2 className="text-danger d-none d-md-block"><FaAlignJustify className="me-4 fs-4 mb-1" />
          Course 1234</h2>
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
