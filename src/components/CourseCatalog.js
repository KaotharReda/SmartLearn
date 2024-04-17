import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

function CourseCatalog() {

    const courses = [
        { id: 1, title: "Introduction to Computer Science", description: "Learn the basics of computer science with Python.", imageUrl: "https://img-c.udemycdn.com/course/750x422/433798_1de9_4.jpg" },
        { id: 2, title: "Web Development for Beginners", description: "An introduction to web development with HTML, CSS, and JavaScript.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjmHht4KbPxnh-AQMrux_bNbWpq46qCsqqwlb4NtdQ7hmY-wN96H0gpuChEhSuqH0aJw&usqp=CAU" },
        { id: 3, title: "Data Science Fundamentals", description: "Explore the fundamentals of data analysis and interpretation.", imageUrl: "https://d2o9wnd5wywfpj.cloudfront.net/covers/8/s_banner/cbds-white-bg.png?1621306347" },
        { id: 4, title: "User Interface and Design", description: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style..", imageUrl: "https://infinum.com/handbook/img/design/designprocess-ui-iterations.png" }

    ];
    return (
        <div className="course-catalog">
            <h1>Course Catalog</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <img src={course.imageUrl} alt={course.title} />
                        <div>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseCatalog;
