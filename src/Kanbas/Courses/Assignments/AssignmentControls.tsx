import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckMark";
export default function AssignmentControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-white me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            <span className="btn btn-lg btn-white  border p-0 pl-5">
                <label htmlFor="wd-search-assignment">
                    <FaSearch className="position-relative me-2" style={{
                        bottom: "1px",
                        left: "5px"
                    }} />
                </label>
                <input id="wd-search-assignment" className="btn btn-lg btn-white me-1 flex-grow"
                    placeholder="Search ..."
                    style={{ textAlign: 'left' }}
                    type="text"></input>
            </span>
        </div>
    );
}