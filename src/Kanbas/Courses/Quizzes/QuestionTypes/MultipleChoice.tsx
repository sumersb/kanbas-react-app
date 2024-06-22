export default function MultipleChoice({
    question
}: {
    question: any;
}) {
    return (
        <div>
            <div className="row align-items-center mb-2 p-2 bg-secondary">
                <div className="col-md-8">
                    <h2>{question.title}</h2>
                </div>
                <div className="col-md-4">
                    <h2 className='float-end'>{question.points}pts</h2>
                </div>
            </div>
            <div className="p-3">
                <p>{question.question}</p>
            </div>
            <hr></hr>
            <div>
                {question.choices.map((c: any) =>
                (
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="choices" id={c} />
                            <label className="form-check-label" htmlFor={c}>
                                {c}
                            </label>
                        </div>
                        <hr></hr>
                    </div>
                ))}
            </div>

        </div>
    )
}