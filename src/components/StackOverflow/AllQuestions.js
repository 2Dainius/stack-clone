import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/AllQuestions.css';

function AllQuestions() {
    return (
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <div className="all-option">
                  <p>0</p>
                  <span>votes</span>
                </div>
                <div className="all-option">
                  <p>0</p>
                  <span>answers</span>
                </div>
                <div className="all-option">
                  <small>0 views</small>
                </div>
              </div>
            </div>
            <div className="question-answer">
              <Link to='/question'>This is question title or smth</Link>
              <div
                style={{
                  maxWidth: "90%",
                }}
              >
                <div>AI Dungeon is a free-to-play single-player and multiplayer text adventure game which uses artificial intelligence to generate content. It allows players to create and share their own custom adventure settings.</div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <span className='question-tags'>
                    React
                </span>
                <span className='question-tags'>
                    AI
                </span>
                <span className='question-tags'>
                    Random
                </span>
              </div>
              <div className="author">
                <small>Timelapse</small>
                <div className="auth-details">
                  <Avatar />
                  <p>User Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default AllQuestions