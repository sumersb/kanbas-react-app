export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h2>Assignment Name</h2></label>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br /><br />
            <textarea id="wd-description">
                The assignment is available online
                Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                            <option>TESTS</option>
                            <option>FINAL PROJECT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                            <option>Decimal</option>
                            <option>Letter Grade</option>
                        </select>
                        <br></br>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        Online Entry Options<br></br>
                        <input type="checkbox" id="wd-text-entry"></input>
                        <label htmlFor="wd-text-entry">Text Entry</label>
                        <br></br>
                        <input type="checkbox" id="wd-website-url"></input>
                        <label htmlFor="wd-website-url">Website URL</label>
                        <br></br>
                        <input type="checkbox" id="wd-media-recordings"></input>
                        <label htmlFor="wd-media-recordings">Media Recordings</label>
                        <br></br>
                        <input type="checkbox" id="wd-student-annotation"></input>
                        <label htmlFor="wd-student-annotation">Student Annotation</label>
                        <br></br>
                        <input type="checkbox" id="wd-file-upload"></input>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                        <br></br>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">Assign</td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id='wd-assign-to' type='text'></input>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top"></td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id='wd-due-date' type='date'></input>
                    </td>
                </tr>
                <tr>
                <td></td>
                    <td>
                        <label htmlFor='wd-available-from'>Available from</label>
                    </td>
                    <td>
                        <label htmlFor='wd-available-until'>Until</label>
                    </td>
                </tr>
                <tr>
                <td></td>
                    <td>
                        <input id='wd-available-from' type='date'></input>
                    </td>
                    <td>
                        <input id='wd-available-until' type='date'></input>
                    </td>
                </tr>
            </table>
        </div>
    );
}
