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
            name: "World Trivia Quiz",
            description:"Fun game to play with friends",
            deployed:"https://carohagg.github.io/World-Trivia-Quiz/",
            github: "https://github.com/caroHagg/World-Trivia-Quiz",
            pic:eventPlanner


        },
        {
            name: "Weather Dashboard App",
            description:"Get info about the weather fro any city you want",
            deployed:"https://carohagg.github.io/Weather-Dashboard/",
            github: "https://github.com/caroHagg/Weather-Dashboard",
            pic:weather


        },
        {
            name: "World Trivia Quiz",
            description:"Fun game to play with friends",
            deployed:"https://carohagg.github.io/World-Trivia-Quiz/",
            github: "https://github.com/caroHagg/World-Trivia-Quiz",
            pic:techblog

        },
        {
            name: "World Trivia Quiz",
            description:"Fun game to play with friends",
            deployed:"https://carohagg.github.io/World-Trivia-Quiz/",
            github: "https://github.com/caroHagg/World-Trivia-Quiz",
            pic:soreLegs

        },
        {
            name: "World Trivia Quiz",
            description:"Fun game to play with friends",
            deployed:"https://carohagg.github.io/World-Trivia-Quiz/",
            github: "https://github.com/caroHagg/World-Trivia-Quiz",
            pic:trivia

        },
        {
            name: "World Trivia Quiz",
            description:"Fun game to play with friends",
            github: "https://github.com/caroHagg/World-Trivia-Quiz",
            pic:backend

        }

    ]
    return (
        <Project projects={projects}/>
    );
}