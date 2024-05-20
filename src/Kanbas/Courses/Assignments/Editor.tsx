export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="wd-name" placeholder="Assignment Name" />
            </div>
            <div id="wd-description" className="border">
                <br></br>
                <p>The assignment is available online
                    <br></br><br></br>
                    Submit a link to the landing page of your Web application running on Netlify.
                    <br></br><br></br>
                    The landing page should include the following:
                    <br></br><br></br>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>Link to the Kanbas application</li>
                        <li>Links to all relevant source code repositories</li>
                    </ul>
                    <br></br><br></br>
                    The Kanbas application should include a link to navigate back to the landing page.
                </p>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-points"
                    className="col-sm-2 col-form-label text-end">
                    Points
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="wd-points" value={100} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-group"
                    className="col-sm-2 col-form-label text-end">
                    Assignment Group
                </label>
                <div className="col-sm-10">
                    <select className="form-select"
                        id="wd-group">
                        <option>ASSIGNMENTS</option>
                        <option>TESTS</option>
                        <option>FINAL PROJECT</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-display-grade-as"
                    className="col-sm-2 col-form-label text-end">
                    Display Grade as
                </label>
                <div className="col-sm-10">
                    <select className="form-select"
                        id="wd-display-grade-as">
                        <option>Percentage</option>
                        <option>Decimal</option>
                        <option>Letter Grade</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-submission-type"
                    className="col-sm-2 col-form-label text-end">
                    Submission Type
                </label>
                <div className="col-sm-10">
                    <div className="border p-2">
                        <div className="flex-grow-1 mb-3">
                            <select className="form-select"
                                id="wd-submission-type">
                                <option>Percentage</option>
                                <option>Decimal</option>
                                <option>Letter Grade</option>
                            </select>
                        </div>

                        <div>
                            <b>Online Entry Options</b>
                            <br></br>
                            <br></br>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>
                            <br></br>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                            </div>
                            <br></br>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>
                            <br></br>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>
                            <br></br>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="wd-assign-to"
                    className="col-sm-2 col-form-label text-end">
                    Assign
                </label>
                <div className="col-sm-10">
                    <div className="border p-2">
                        <div className="flex-grow-1 mb-3">
                            <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
                            <input className="form-control" id='wd-assign-to' type='text'></input>
                        </div>
                        <div className="flex-grow-1 mb-3">
                            <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
                            <input className="form-control" id='wd-due-date' type='date'></input>
                        </div>
                        <div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
                                    <input className="form-control" id="wd-available-from" type='date' />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label"><b>Available Until</b></label>
                                    <input className="form-control" id="wd-available-until" type='date' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
