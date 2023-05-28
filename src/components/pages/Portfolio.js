import React from 'react';
import Project from './Project';
import trivia from '../../Assets/Images/quiz.png';
import soreLegs from '../../Assets/Images/soreLegs.png';
import techblog from '../../Assets/Images/techblog.png';
import weather from '../../Assets/Images/weather.png';
import eventPlanner from '../../Assets/Images/eventplanner.png';
import backend from '../../Assets/Images/backend.png';

export default function Portfolio (){
    const projects =[
        {
            id:1,
            name: "Event Planner, a collab app",
            description:"Connect your gmail with this page and plan your entire event in one app",
            deployed:"https://17anguyen.github.io/event-planner/",
            github: "https://github.com/17anguyen/event-planner",
            pic:eventPlanner


        },
        {
            id:2,
            name: "Weather Dashboard App",
            description:"Get info about the weather for any city you want",
            deployed:"https://carohagg.github.io/Weather-Dashboard/",
            github: "https://github.com/caroHagg/Weather-Dashboard",
            pic:weather


        },
        {
            id:3,
            name: "Tech Blog MVC",
            description:"An app where you can post, comment and learn some more",
            deployed:"https://techblogmvcch.herokuapp.com/",
            github: "https://github.com/caroHagg/Tech-Blog-MVC",
            pic:techblog

        },
        {
            id:4,
            name: "Cirque du Sore Legs",
            description:"Fun exercises to do by yourself, a partner or your kids",
            deployed:"https://cirque-du-sore-legs.herokuapp.com/",
            github: "https://github.com/DevManCryBB/circue-de-sore-legs",
            pic:soreLegs

        },
        {
            id:5,
            name: "World Trivia Quiz",
            description:"Fun game to play with friends",
            deployed:"https://carohagg.github.io/World-Trivia-Quiz/",
            github: "https://github.com/caroHagg/World-Trivia-Quiz",
            pic:trivia

        },
        {   id:6,
            name: "Back End Social Network",
            description:"A whole backend to start your front end for a great social network app",
            github: "https://github.com/caroHagg/NoSql-Social-Network-API",
            pic:backend

        }

    ]
    return (
        <Project projects={projects}/>
    );
}