import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const findAssignment = async (courseId: string, assignmentID: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}/assignments/${assignmentID}`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};


const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentID: string) => {
    const response = await axios
        .delete(`${ASSIGNMENT_API}/${assignmentID}`);
    return response.data;
};
export const updateAssignment = async (assignment: any) => {
    const response = await axios.
        put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
};
