import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as client from "./client";
import { assignments } from "../../Database";
import { Routes, Route } from "react-router";
import QuizDetails from "./QuizDetails";
import QuizQuestions from "./QuizQuestions";
import Navbar from "./Navbar";

export default function QuizEditor() {

    const { cid } = useParams();

    const [quiz, setQuiz] = useState({
        title: 'Unnamed Quiz',
        published: false,
        course_id: '',
        instructions: '',
        type: 'GRADED QUIZ',
        points: 100,
        assignment_group: 'QUIZZES',
        shuffle_answers: true,
        has_time_limit: false,
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
        assign: 'EVERYONE',
    });

    const [questions, setQuestions] = useState([]);

    const addQuiz = async (newQuiz: any) => {
        const new_quiz = await client.createQuiz(newQuiz);
    }

    const updateQuiz = async (updatedQuiz: any) => {
        await client.updateQuiz(updatedQuiz);
    };

    const setUp = async () => {
        setQuiz(quiz);
    }

    useEffect(() => {
        setUp();
    }, []);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="Details" element={<QuizDetails quiz={quiz} setQuiz={setQuiz}/>} />
                <Route path="Questions" element={<QuizQuestions quiz={quiz} setQuiz={setQuiz} questions={questions} setQuestions={setQuestions}/>} />

            </Routes>

            <div>

                <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end"
                >
                    Save
                </button>
                <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
                    Cancel
                </button>
            </div>

            
        </div>
    )
}