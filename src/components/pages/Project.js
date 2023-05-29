import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Project (props){
    const mainStyle = {
        background: '#f0ece2',
        color:'#596e79'  
      }
    return ( 
        <div className="container">
            
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
            {props.projects.map((project)=>(
                <div className="col" key={project.id}>
                <div className="card" style={mainStyle}>
                    <img src={project.pic} className="card-img-top img-fluid" alt="project screenshot"/>
                 <div className="card-body border-top">
                    <div>
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <SocialIcon url={project.github}  style={{ height: 25, width: 50 }}  target="_blank" rel="noreferrer" />
                    {project.deployed&&(<SocialIcon url={project.deployed} bgColor="#7E7C73" style={{ height: 25, width: 25 }}  target="_blank" rel="noreferrer" />)}
                    </div>
                 </div>
                </div>    
            </div>))}
        </div>
    </div>
    );
}