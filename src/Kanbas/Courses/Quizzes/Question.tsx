import React, { EventHandler, useState } from 'react';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import TrueOrFalse from './QuestionTypes/TrueOrFalse';
import FillInTheBlank from './QuestionTypes/FillInTheBlank';
import { deleteQuiz } from './client';
import { FaPencil } from 'react-icons/fa6';
import MultipleChoiceEditor from './QuestionTypes/MultipleChoiceEditor';
import FillInTheBlankEditor from './QuestionTypes/FillInTheBlankEditor';
import TrueOrFalseEditor from './QuestionTypes/TrueOrFalseEditor';

function Question({
  question,
  index,
  updateQuestion,
  deleteQuestion
}: {
  question: any;
  index: number;
  updateQuestion: (question: any, index: number) => void;
  deleteQuestion: (index: number) => void;
}) {

  const [editing, setEditing] = useState(false);
  const [tempQuestion, setTempQuestion] = useState(question);

  return (
    <div className="container p-0">
      {editing && tempQuestion.type === "multiple_choice" && (
        <MultipleChoiceEditor
          tempQuestion={tempQuestion}
          setTempQuestion={setTempQuestion}
        />
      )}
      {editing && tempQuestion.type === "fill_in_blank" && (
        <FillInTheBlankEditor />
      )}
      {editing && tempQuestion.type === "true_false" && (
        <TrueOrFalseEditor />
      )}
      {!editing && question.type === "multiple_choice" && (
        <MultipleChoice
          question={question} />
      )}
      {!editing && question.type === "fill_in_blank" && (
        <FillInTheBlank />
      )}
      {!editing && question.type === "true_false" && (
        <TrueOrFalse />
      )}
      {!editing && (
        <button onClick={(e) => setEditing(!editing)} className=' btn bg-secondary'>
          Edit
        </button>
      )}
    </div>


  );
}

export default Question;
