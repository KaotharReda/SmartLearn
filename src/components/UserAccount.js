import React from 'react';
import "../styles/global.css"
import { FaPencilAlt } from 'react-icons/fa';


function UserAccount() {

    const studentProfile = {
        name: "Alexa Adams",
        email: "AlexaA@gmail.com",
        major: "Computer Science",
        collegeName: "Concordia University",
        expectedGraduation: "2024",
        imageUrl: "https://img.freepik.com/free-photo/side-view-woman-wearing-hair-clips_23-2149872368.jpg"

    };

    return (
        <div className="user-account">
            <div className="profile-image">
                <img src={studentProfile.imageUrl} alt="Profile"/>
            </div>
            <div className="profile-details">
                <h1>User Profile <button className="edit-profile-button"><FaPencilAlt/></button></h1>
                <div className="profile-detail"><strong>Name:</strong> {studentProfile.name}</div>
                <div className="profile-detail"><strong>Email:</strong> {studentProfile.email}</div>
                <div className="profile-detail"><strong>Education Level:</strong> {studentProfile.education}</div>
                <div className="profile-detail"><strong>Major:</strong> {studentProfile.major}</div>
                <div className="profile-detail"><strong>College Name:</strong> {studentProfile.collegeName}</div>
                <div className="profile-detail"><strong>Expected
                    Graduation:</strong> {studentProfile.expectedGraduation}</div>
            </div>
        </div>
    );
}

export default UserAccount;
