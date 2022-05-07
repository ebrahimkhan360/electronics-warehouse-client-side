import React from 'react';
import me from '../../images/me/ebrahim.jpg';
import './About.css'
const About = () => {
    return (
        
        <div className='container bg-style p-3'>
            <img className='my-img-style' src={me} alt=""/>
            <h2>Created by : MD. Ebrahim Alli</h2>
            <p>HI.<br/> I am Ebrahim<br/> . I'm from Bangladesh. I am a Jr. full stack web developer.<br/> Currently working at Sofwid as a Jr. Front end web developer intern (remotely).<br/> And also I am a moderator at Programming Hero from 2 Years. <br/> I love learning new technologies every day. Currently I am learning the skill of web development.</p>
        </div>
    );
};

export default About;