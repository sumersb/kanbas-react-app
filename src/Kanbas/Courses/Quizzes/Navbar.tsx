import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {

    const { cid } = useParams();

    const pathname = useLocation().pathname.split("/");
    const active_loc = pathname[pathname.length - 1]


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="collapse navbar-collapse" id="navbarNav">
                        <button className={`btn btn-primary ${(active_loc === "Details") ? 'btn-primary' : 'btn-secondary'}`}>
                            <Link className='nav-link' to={`/Kanbas/Courses/${cid}/Quizzes/add/Details`}>Details</Link>
                        </button>
                        <button className={`btn btn-primary ${(active_loc === "Questions") ? 'btn-primary' : 'btn-secondary'}`}>
                            <Link className='nav-link' to={`/Kanbas/Courses/${cid}/Quizzes/add/Questions`}>Questions</Link>
                        </button>
                </div>
            </nav>
        </div>
    );
}