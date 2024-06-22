import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as client from "./client";
import Question from "./Question";

export default function QuizQuestions({ quiz, setQuiz, questions, setQuestions }: {
    quiz: any;
    setQuiz: (quiz: any) => void;
    questions: any;
    setQuestions: (questions: any) => void;
}) {

    const [question, setQuestion] = useState({
        type: 'multiple_choice',
        title: 'Unnamed Question',
        question: "Consequatur unde ducimus, tempore commodi quae ad blanditiis, vitae earum dolores autem reprehenderit, aspernatur nam! Non nulla omnis impedit veniam recusandae. Repudiandae fuga tempora omnis ea ducimus unde qui delectus saepe quidem expedita suscipit hic, reiciendis ex, rerum voluptatibus consequatur iste voluptate beatae a amet voluptates sapiente cupiditate ratione? Aspernatur, hic.",
        points: 10,
        choices: ["Black", "White", "Purple"],
        answer: ''
    });

    const addQuestions = () => {
        setQuestions([...questions, question])
    }

    const updateQuestion = (index: number, updatedQuestion: any) => {
        const updatedQuestions = questions.map((q: any, i: number) => (i === index ? updatedQuestion : q));
        setQuestions(updatedQuestions);
    };

    const deleteQuestion = (index: number) => {
        const updatedQuestions = questions.filter((q: any, i: number) => i !== index);
        setQuestions(updatedQuestions);
    };


    return (

        <div className="ml-3">
            <h1>Questions</h1>
            <br />
            <br />


            <button onClick={addQuestions}>Add Multiple Choice Question</button>

            <div className="container">
                <div className="row justify-content-center">
                    {questions.map((q: any, i: number) => (
                        <div className="card bg-white border m-5" style={{ width: "70%", minHeight: "550px" }}>
                            <Question
                                question={q}
                                index={i}
                                updateQuestion={updateQuestion}
                                deleteQuestion={deleteQuestion}
                            />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}