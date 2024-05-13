export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/math.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            MA5001 Math
                        </a>
                        <p className="wd-dashboard-course-title">
                            Discrete Math
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/python.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS5002 Python
                        </a>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of Python
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/oop.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS5004 Java
                        </a>
                        <p className="wd-dashboard-course-title">
                            Object Oriented Programming
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/dougie.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            DA5002 Body
                        </a>
                        <p className="wd-dashboard-course-title">
                            Intro to Dougie
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/basketball.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            PE2480 Mamba
                        </a>
                        <p className="wd-dashboard-course-title">
                            Mamba Mentality
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/brokenheart.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            HB2004 Heart
                        </a>
                        <p className="wd-dashboard-course-title">
                            How to get over a broken heart
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
