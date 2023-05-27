import React from 'react';


export default function Project (props){
    const styles = {
        color:"black"
    }
    
    return ( 
        <div className="container">
            
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
            {props.projects.map((project)=>(
                <div className="col">
                <div className="card">
                    <img src={project.pic} className="card-img-top img-fluid" alt="project screenshot"/>
                 <div className="card-body border-top">
                    <div>
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a className="nav-link active" href={project.github} target="_blank">Git Repo</a>
                    {project.deployed?<a className="nav-link active" href={project.deployed} target="_blank">App Link</a>:null}
                    </div>
                 </div>
                </div>    
            </div>))}
        </div>
    </div>
    );
}