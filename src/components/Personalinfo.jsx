import React from 'react'

function Personalinfo() {
    return (
        <div>
            <div className="title-name">
                <p className="user-name">Guerdy Lambert</p>
                <p className="user-title">Frontend Developer</p>
                <p className="user-website">guerdylambert.website</p>
            </div>
            <div className="button-div">
                <button className="emailbtn">Email</button>
                <button className="linkedinbtn">LinkedIn</button>
            </div>
            <div className="about-div">
                <h2 className="user-about">About</h2>
                 <p className="user-about-paragraph">
                     I am a frontend developer with a particular interest in making things simple and automating daily tasks.  I try to keep up with security and best practices, and am always looking for new things to learn
                 </p>
            </div>
            <div className="interests-div">
                <h2 className="user-interests">Interests</h2>
                 <p className="user-interests-paragraph">
                     Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                 </p>
            </div>
        </div>
    )
}

export default Personalinfo