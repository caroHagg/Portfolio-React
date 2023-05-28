import React from 'react';
import myPic from '../../Assets/Images/mepic1.png'


export default function About (){
    const style={
        width:"250px"
    }
    return (
        // image of me 
        // info about me
        <div className="container vh-100 mt-4" >
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col flex-shrink-0" style={style}> 
                <img src={myPic} className="img-thumbnail" alt="self portrait" ></img>
            </div>
            <div className="col flex-shrink-0 justify-content-start">
            <p class="fw-bold lh-base mt-4 ms-2">Hello! Welcome to my portfolio. My name is Carolina Haggerty, originally from Argentina.
             I've lived in Seattle for almost 13 years and formed an amazing family. 
            I love the outdoors, family/friends gatherings or just spending time at home. 
            Currently, I'm finishing my certification on full stack web developer and I'm excited to enter the Tech workforce once again.
            Before I decided to change careers to work in Health Care, I was a software developer back in my home country. 
            In the past few months, I've realized how much I enjoy coding!</p>
            </div>
            </div>
        </div>
        );
}