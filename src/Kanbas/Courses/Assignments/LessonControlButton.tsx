import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckMark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";

export default function LessonControlButtons({ assignmentID, deleteAssignment }: {
    assignmentID: string; deleteAssignment: (assignmentID: string) => void
}) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
            <DeleteAssignment
                assignmentID={assignmentID}
                deleteAssignment={deleteAssignment} />
        </div>
    );
}
