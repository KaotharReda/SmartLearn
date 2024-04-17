import React from 'react';
import { MdBook, MdStar, MdCheckCircle } from 'react-icons/md';

function PersonalizedLearning() {
    const currentCourses = [
        { id: 1, title: "Advanced JavaScript", status: "In Progress" },
        { id: 2, title: "Algorithms and Data Structures", status: "In Progress" }
    ];

    const recommendedCourses = [
        { id: 1, title: "React Fundamentals" },
        { id: 2, title: "Machine Learning Basics" }
    ];

    const learningGoals = [
        { id: 1, goal: "Master front-end development by Q3" },
        { id: 2, goal: "Learn basic machine learning by end of the year" }
    ];

    return (
        <div className="personalized-learning">
            <img src="https://www.21kschool.com/us/wp-content/uploads/sites/37/2022/09/How-Online-Education-is-Better-Than-Classroom-Education.jpg"
                 alt="Online Education"
                 className="learning-image" />
            <h1>Personalized Learning Dashboard</h1>
            <div className="current-courses">
                <h2><MdBook /> Current Courses</h2>
                {currentCourses.map(course => (
                    <div key={course.id} className="course">{course.title} - {course.status}</div>
                ))}
            </div>
            <div className="recommended-courses">
                <h2><MdStar /> Recommended Courses</h2>
                {recommendedCourses.map(course => (
                    <div key={course.id} className="course">{course.title}</div>
                ))}
            </div>
            <div className="learning-goals">
                <h2><MdCheckCircle /> Learning Goals</h2>
                {learningGoals.map(goal => (
                    <div key={goal.id} className="goal">{goal.goal}</div>
                ))}
            </div>
        </div>
    );
}

export default PersonalizedLearning;
