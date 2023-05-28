import React from 'react';


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
                    <a className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover pe-3" style={mainStyle} href={project.github} target="_blank" rel="noreferrer">Git Repo </a>
                    {project.deployed&&(<a className="link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={mainStyle}  href={project.deployed} target="_blank" rel="noreferrer">App Link</a>)}
                    </div>
                 </div>
                </div>    
            </div>))}
        </div>
    </div>
    );
}