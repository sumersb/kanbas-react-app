//Default
import "./index.css"
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/math.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    MA5001 Math
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Discrete Math
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/snake.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 Python
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to Programming
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/oop.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004 Java
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to Object Oriented Programming
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/dougie.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    DA5002 Body
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to Dougie
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/basketball.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    PE2480 Mamba
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Introduction to Mamba Mentality
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card">
                            <img src="/images/brokenheart.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    HB004 Heart
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    How to get over a Broken Heart
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
