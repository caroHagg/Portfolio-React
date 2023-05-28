import React from 'react';
import { Link } from "react-router-dom"
import resume from '../../Assets/Images/CHResume.pdf'

export default function Resume (){
    const mainStyle = {
        background: '#596e79',
        color:"#f0ece2"   
      }
    return (
        <div className="container-fluid mt-5 py-2 vh-100" >
        <div className="row justify-content-center mt-5">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card card-size mb-2" style={mainStyle}>
                    <div className="card-header">
                        <h3 className="flex-shrink-0">Proficiencies</h3>
                        <Link
                            to={resume}
                            download="Resume-PDF-document"
                            target="_blank"
                            rel="noreferrer"
                            className='link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover flex-grow-1' style={mainStyle}>Resume⇣</Link>
                    </div>
                    <div className="card-body">
                        <p>FRONT END</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>JQUERY</li>
                            <li>REACT</li>
                            <li>BOOTSTRAP</li>
                        </ul>
                        <p>BACK END</p>
                        <ul>
                            <li>APIs</li>
                            <li>NODE</li>
                            <li>EXPRESS</li>
                            <li>MYSQL, SEQUELIZE</li>
                            <li>MONGODB, MONGOOSE</li>
                            <li>REST</li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
        </div>
    );
}