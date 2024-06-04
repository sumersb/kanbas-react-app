import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
    assignment: {
        "_id": "A303",
        "title": "Systems Engineering Exam",
        "course": "RS103",
        "release_date": [2025, 5, 20],
        "due_date": [2025, 5, 27],
        "points": "100"
    }
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assigment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: assigment.name,
                course: assigment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        editAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentID ? { ...a, editing: true } : a
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;