import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer (){
    const style = {
        background:"#f0ece2"
        
    }
    return (
        <div className="footer text-center mt-4 mb-2 py-1" style={style}>
            <SocialIcon url="https://linkedin.com/in/carolinahaggerty" style={{ height: 25, width: 50 }} target="_blank" rel="noreferrer" />
            <SocialIcon url="https://github.com/caroHagg"  style={{ height: 25, width: 50 }}  target="_blank" rel="noreferrer" />
            <SocialIcon url="mailto:carolina.vhaggerty@gmail.com"  style={{ height: 25, width: 50 }}/>
        </div>
    );
}