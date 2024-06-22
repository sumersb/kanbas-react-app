import Details from "./SearchEdit";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as client from "./client";
import QuizMove from "./QuizMove";
import QuizControlButtons from "./QuizControlButtons";
import SearchEdit from "./SearchEdit";

export default function Quizzes() {
    const { cid } = useParams();

    const [quiz, setQuiz] = useState({
        title: '',
        published: false,
        course_id: '',
        instructions: '',
        type: 'GRADED QUIZ',
        points: 100,
        assignment_group: 'QUIZZES',
        shuffle_answers: true,
        time_limit: 0,
        multiple_attempts: false,
        num_attempts: 1,
        show_answers: false,
        access_code: '',
        one_question_view: true,
        webcam: false,
        lock_questions: false,
        due: '',
        available: '',
        until: '',
    });
    const [quizzes, setQuizzes] = useState<any[]>([]);

    const fetchQuizzes = async () => {
        const q = await client.findQuizByCourseID(cid as string);
        setQuizzes(quizzes);
    };
    useEffect(() => {
        fetchQuizzes();
    }, []);

    const removeQuiz = async (quizID: string) => {
        await client.deleteQuiz(quizID);
        setQuizzes(quizzes.filter((q) => q._id !== quizID));
    };

    const addQuiz = async (newQuiz: any) => {
        const new_quiz = await client.createQuiz(newQuiz);
        setQuizzes([...quizzes, new_quiz]);
    }

    const deleteQuiz = async (quizID: string) => {
        await client.deleteQuiz(quizID);
        setQuizzes(quizzes.filter((q) => q._id != quizID));
    }

    const updateQuiz = async (updatedQuiz: any) => {
        await client.updateQuiz(updatedQuiz);
        setQuizzes(
            quizzes.map((c) => {
                if (c._id === updatedQuiz._id) {
                    return updatedQuiz;
                } else {
                    return c;
                }
            })
        );
    };
    return (
        <div>
            <SearchEdit />
            <br />
            <br />
            <ul id="wd-quiz-list" className="list-group rounded-0 mt-3">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border">
                    <div className="wd-title p-3 ps-2 bg-secondary border">
                        <span className="fs-3">Quizzes</span>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {quizzes
                            .filter((quizzes: any) => quizzes.course_id === cid)
                            .map((quiz: any) =>
                                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                    <QuizMove />
                                    <p className="flex-grow-1">
                                        <a className="text-decoration-none text-dark fw-bold wd-assignment-link"
                                            href={`#/Kanbas/Courses/${cid}/Quiz/${quiz._id}`}>
                                            {quiz.title}
                                        </a>
                                        <br></br>
                                        <span className="text-danger">Multiple Modules</span> | <b>Not available until </b> Now Now at 11:59pm<br></br>
                                        <b>Due</b> Now at 11:59pm | 100pts
                                    </p>
                                    <QuizControlButtons
                                        quizID={quiz._id} />
                                </li>
                            )}
                    </ul>
                </li>
            </ul>
        </div>
    )
}