import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/global.css"
import {  FaMailBulk, FaStreetView, FaSignOutAlt, FaArrowRight, FaComments} from 'react-icons/fa';
import { MdVisibility, MdOpenWith, MdArrowForward , MdForum  } from 'react-icons/md';



function Forums() {
    // Initializing the forumThreads array directly inside the component
    const [threads, setThreads] = useState([
        {
            id: 1,
            title: "Introduction to Programming",
            content: "Feel free to discuss any queries related to introductory programming concepts here."
        },
        {
            id: 2,
            title: "Web Development",
            content: "Discuss and share resources about HTML, CSS, JavaScript, and more."
        },
        {
            id: 3,
            title: "Data Science",
            content: "A place to explore questions about data analysis, machine learning, and statistical methods."
        }
    ]);

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleNewThread = () => {
        const newThread = {
            id: threads.length + 1, // Ensure unique ID
            title: newTitle,
            content: newContent
        };
        setThreads([...threads, newThread]);
        setNewTitle('');
        setNewContent('');
    };

    return (
        <div className="forum-container">
            <img
                src="https://www.uog.edu/_resources/images/news-and-announcements/2020-2021/00-hands-up-header.jpg"
                alt="Discussion Groups"
                className="forum-image"/>
            <h1><MdForum/>Forums</h1>
            {threads.map(thread => (
                <div key={thread.id} className="forum-thread">
                    <h2>{thread.title}</h2>
                    <p>{thread.content}</p>
                    <Link to={`/forums/${thread.id}`} className="view-thread-link"><MdArrowForward/> Thread</Link>
                </div>
            ))}
            <div className="new-thread-form">
                <h2>Add a New Thread</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={newContent}
                    onChange={e => setNewContent(e.target.value)}
                />
                <button onClick={handleNewThread}><FaMailBulk/> Send</button>
            </div>
        </div>
    );
}

export default Forums;
