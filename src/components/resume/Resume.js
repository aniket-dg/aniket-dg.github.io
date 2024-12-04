import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export class Resume extends Component {
    render() {
        return (
            <div>
                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title">
                            <h2>Resume</h2>
                            {/* <p>quidem hic quas.</p> */}
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Sumary</h3>
                                <div className="resume-item pb-0">
                                    <h4>Aniket Gavali</h4>
                                    <p><em>Passionate and innovative Information Technology Student with 1+ years of
                                        experience designing and developing efficient backend for various web based
                                        applications.</em></p>
                                    <ul>
                                        <li>Pune, Maharashtra</li>
                                        <li>(91) 9322861739</li>
                                        <li>aniket.dg25@gmail.com</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Experience</h3>
                                <div className="resume-item">
                                    <h4>Noovosoft</h4>
                                    <h5>Sep 2022 - Present</h5>
                                    <p><em>Pune, Maharashtra</em></p>
                                    <ul>
                                        <li>Implemented a <b>Terraform-based Lambda function</b> with a <b>NAT
                                            gateway</b> to resolve Dumea IP restrictions,
                                            enabling <b>auto-scaling</b> while phasing out legacy data connectors.
                                        </li>
                                        <li>Integrated <b>TapFeed data</b> with the product, achieving <b>100%
                                            automation</b> in feed management.
                                        </li>
                                        <li>Implemented <b>multi-tenancy</b> using <b>Django Tenant</b>, enabling
                                            seamless support for multiple clients with isolated data and configurations,
                                            improving scalability and security.
                                        </li>
                                        <li>Mentored incoming interns, introducing <b>best practices</b> for <b>code
                                            quality</b> and project delivery.
                                        </li>
                                        <li>Configured <b>pre-push checks</b> to run <b>test cases</b> and enforce <b>code
                                            formatting</b> with Black, reducing bugs and unformatted code
                                            by <b>95%</b> and ensuring consistent code quality in the main branch.
                                        </li>
                                        <li>Assisted in the development of <b>scalable REST APIs</b>, contributing to
                                            a <b>15% increase</b> in response efficiency.
                                        </li>

                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>D'n'D Rodhak</h4>
                                    <h5>Jul 2022 - Aug 2022</h5>
                                    <p><em>Mandi, Himachal Pradesh</em></p>
                                    <ul>
                                        <li>Developed a system to collect and <b>display real-time data</b> from a
                                            Raspberry Pi device installed in vehicles.
                                        </li>
                                        <li>Implemented a dashboard to track <b>vehicle location on a map</b> in real
                                            time.
                                        </li>
                                        <li>
                                            Managing Backend of Application on AWS EC2 instance and <b>making
                                            application more efficient</b> by efficient data fetching, <b>increasing
                                            user experience</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>Siteguide Pvt. Ltd.</h4>
                                    <h5>April 2021 - Jun 2022</h5>
                                    <p><em>Jalgaon, Maharashtra</em></p>
                                    <ul>
                                        <li>Optimized the execution of application for maximum
                                            speed and scalability using effective database query, etc.
                                            <b>to minimize application load time by 70%</b></li>
                                        <li>Convert old projects and apply<b> OOP’s concept and
                                            Django class-based views, DRY principle</b> for better
                                            reusability
                                        </li>
                                        <li>Built reusable code and libraries for future use which
                                            <b>covered other project 20% work.</b></li>
                                        <li>Deployment of project on Cloud like<b> AWS, Google
                                            Cloud, VPS</b>, etc.
                                        </li>
                                        <li>Implemented key features for security and protection of
                                            data like<b> 2-factor authentication, OTP authentication.</b></li>
                                    </ul>

                                </div>


                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>Bachelor of Engineering Information Technology</h4>
                                    <h5>Jun 2020 - May 2023</h5>
                                    <p><em>Sinhgad Institute of Technology and Science, CGPA: 9.11</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Diploma in Computer Technology</h4>
                                    <h5>Aug 2017 - May 2020</h5>
                                    <p><em>Government Polytechnic Nashik | Percentage: 88.00%</em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>10th Maharashtra State Board</h4>
                                    <h5>Mar 2017</h5>
                                    <p><em>Maharana Pratap Vidyalaya, Bhusawal | Percentage: 91.20%</em></p>
                                </div>


                                <h3 className="resume-title">ACHIEVEMENTS</h3>
                                <div className="resume-item">
                                    <h4>Winner - Mindquisitive Hackathon</h4>
                                    <h5>Mar 2022</h5>
                                    <p><em>Mindquisitive Hackathon among <b>75+ groups</b></em></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Winner - Internal Smart India Hackathon</h4>
                                    <h5>April 2022</h5>
                                    <p><em>held in College for nominating teams for Smart India Hackathon 2022</em></p>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Projects</h3>
                                <div className="resume-item">
                                    <h4>
                    FinSailor{' '}
                    <a
                      href="https://github.com/aniket-dg/finsailor"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                    >
                      &nbsp;<FontAwesomeIcon icon={faGithub} />
                    </a>
                  </h4>
                                    <h5>Apr 2024 - Present</h5>
                                    <p><em>Personal Project - Combo Investment Tracking</em></p>
                                    <ul>
                                        <li><b>Developed a full-stack web application</b> for tracking investments
                                            across multiple brokers, including Zerodha and Groww, with features for
                                            investment portfolio management and real-time market data.
                                        </li>
                                        <li><b>Integrated real-time market data fetching</b> from NSE
                                            using <b>Celery</b> for asynchronous task management, ensuring scalability
                                            and optimization.
                                        </li>
                                        <li><b>Designed a combined view of investments</b>, enabling users to:
                                            <ul>
                                                <li>Track <b>assets, liabilities, and portfolio performance</b> in a
                                                    single view.
                                                </li>
                                                <li>Analyze investments by <b>sector, macro-sector, industry, and basic
                                                    industry</b> classifications.
                                                </li>
                                            </ul>
                                        </li>
                                        <li><b>Implemented portfolio health check features</b> by:
                                            <ul>
                                                <li>Analyzing mutual fund financials for deeper insights.</li>
                                                <li>Tracking cumulative dividends from the <b>initial purchase date</b>.
                                                </li>
                                            </ul>
                                        </li>
                                        <li><b>Created an intuitive, family-wide investment tracking view</b> to allow
                                            users to manage and analyze their family's financial data in one place.
                                        </li>
                                        <li><b>Visualized stock investments</b> with buy volumes, enabling trend
                                            analysis and better decision-making.
                                        </li>
                                        <li><b>Technologies used:</b> Python, Django, Celery, PostgreSQL, React</li>

                                    </ul>
                                </div>
                                <div className="resume-item">

                                    <h4>
                    CollaborativePY{' '}
                    <a
                      href="https://github.com/aniket-dg/collaborativePy"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                    >
                      &nbsp;<FontAwesomeIcon icon={faGithub} />
                    </a>
                  </h4>
                                    <h5>Nov 2022 - Mar 2023</h5>
                                    <p><em>Personal Project - Real-time Collaborative Environment for Software
                                        Developers</em></p>
                                    <ul>
                                        <li>Developed a web-based <b>Collaborative IDE</b> that allows software
                                            developers to collaborate in real-time on the same codebase, optimizing team
                                            workflows.
                                        </li>
                                        <li>Integrated <b>synchronous coding</b>, <b>live preview</b>, and <b>user
                                            awareness</b> features to enhance real-time collaboration and reduce errors.
                                        </li>
                                        <li>Implemented communication tools like <b>text and video chat</b> for seamless
                                            interaction, optimizing team communication during development.
                                        </li>
                                        <li>Optimized platform performance by eliminating local compilers, enabling
                                            cross-platform access directly through the web browser, without
                                            dependencies.
                                        </li>
                                        <li>Improved development speed with live previews of code changes, streamlining
                                            the coding and debugging process.
                                        </li>
                                        <li>Ensured scalability by <b>stretching server capacity</b> to handle growing
                                            user traffic, deploying the project on cloud platforms with auto-scaling
                                            capabilities.
                                        </li>
                                        <li><b>Technologies used:</b> Python | Django | WebSockets | JavaScript | WebRTC
                                            |
                                            Node.js | PostgreSQL
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>
                    MahaSIG Portal{' '}
                    <a
                      href="https://github.com/aniket-dg/mahasig"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                    >
                      &nbsp;<FontAwesomeIcon icon={faGithub} />
                    </a>
                  </h4>
                                    <h5>Jan 2022 - Mar 2022</h5>
                                    <p><em>Group Project - Project for Mindquisitive Hackathon</em></p>
                                    <ul>
                                        <li>Developed a full-stack web application for the Maha
                                            Student-Industry-Government portal with 4 different user dashboards: <b>SuperAdmin,
                                                Admin, Industry User, and Alumni User</b>.
                                        </li>
                                        <li>Engineered features like <b>Peer-to-Peer (P2P) Chat</b> and <b>Group Chat
                                            System</b> for seamless communication between users.
                                        </li>
                                        <li>Implemented <b>OTP verification</b> and <b>automated assignment feedback
                                            emails</b> to streamline user authentication and feedback processes.
                                        </li>
                                        <li>Enhanced the student data management process by
                                            incorporating <b>in-built </b>
                                            spreadsheet and <b>PDF generation</b> functionalities for easy data creation
                                            and
                                            <b> download</b>.
                                        </li>
                                        <li>Deployed and maintained the application on an <b>Azure VM instance</b> for
                                            10 days, ensuring reliable hosting and performance.
                                        </li>
                                        <li><b>Technologies used:</b> Python | Django | Channels | Redis | PostgreSQL |
                                            Bootstrap | JavaScript | AJAX
                                        </li>
                                    </ul>
                                </div>


                            </div>


                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Resume