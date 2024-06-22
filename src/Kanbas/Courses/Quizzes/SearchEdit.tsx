import { FaPlus } from "react-icons/fa"
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";


export default function SearchEdit() {

    const navigate = useNavigate();

    const { cid } = useParams();

    return (
        <div className="mb-4">
            <button className="float-end btn btn-secondary">
                <IoEllipsisVertical className="me-2"/>
            </button>
            <button onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/add/Details`)} className="float-end btn btn-danger me-1">
                <FaPlus className="me-2" />
                Add Course
            </button>
            <input placeholder="Search for Quiz"
                className="form-control float-start w-25 me-2" />
        </div>)
}