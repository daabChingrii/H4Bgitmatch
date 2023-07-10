import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './profilepage.css'

export default function PersonalProfile() {
  return (
    <div class="container">
      <div class="card m-3 text-light" style={{ width: '50rem' }}>
        <div class="row no-gutters">
          <div class="col-md justify-content-center align-items-center">
            <img src='https://avatars.githubusercontent.com/u/103283554?v=4' class="card-img rounded-circle m-3" id="avatar" alt="Cat in an avacado" />
            <div class="card-body m-4" id='own'>
              <h3 className="card-title" id='name'>Diya Das</h3>
              <h4 className='card-subtitle' id='subname'>Disaster Gay</h4>
              <div className='socials'>
                <SocialIcon className='icon' url="https://www.linkedin.com/in/diya-das-mdas/" target="_blank" />
                <SocialIcon className='icon' url="https://github.com/MDas08" target="_blank" bgColor="#FFFFF0" />
              </div>
              <a href='https://antonandirene.com/' class="btn btn-outline-success">Personal Website</a>
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-text mt-5">Bio</h5>
              <p className="card-text">I am a sophomore at KIIT Bhubaneswar, pursuing a BTech degree in Information Technology. Currently I am learning Python and Java. Outside of academics I enjoy writing essays and poetry, reading about new cultures, ideas, thoughts and traveling. I can speak multiple languages and enjoy working with diverse groups of people.</p>
              <div className='d-flex justify-content-center'>
                <button className='skill'>MongoDB</button>
                <button className='skill'>ExpressJS</button>
                <button className='skill'>ReactJS</button>
                <button className='skill'>NodeJS</button>
              </div>
              <p className="card-text mt-5">Interested in</p>
              <div className='d-flex justify-content-center mt-3'>
                <button className='interests'>Hackathons</button>
                <button className='interests'>Networking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}