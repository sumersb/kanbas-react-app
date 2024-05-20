import { IoEnterOutline } from "react-icons/io5";

export default function StudentGrades() {
    return (
        <div className="row">
            <div id="wd-student-grade-tables">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center table-striped">
                        <thead>
                            <tr>
                                <th><b>Student Name</b></th>
                                <th>A1 SETUP<br></br>Out of 100</th>
                                <th>A2 HTML<br></br>Out of 100</th>
                                <th>A3 CSS<br></br>Out of 100</th>
                                <th>A4 Bootstrap<br></br>Out of 100</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-danger">Sumer Bal</td>
                                <td><input className="border-danger form-control input-sm d-inline" style={{ maxWidth: '70px' }} value={100} /><IoEnterOutline/></td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Sumer Bal</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Sumer Bal</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Sumer Bal</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Sumer Bal</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr><tr>
                                <td className="text-danger">Sumer Bal</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 