import React from 'react';

const SocialNet = ({socialNet}) => {
    
    const goToPage = () => {
        let url = new URL(socialNet.url);
        window.open(url.href , '_blank');
    }

    return (
        <div className = {socialNet.cssClass} onClick = {goToPage}>
            <i className = {socialNet.icon}></i>
        </div>
    );
};

 
export default SocialNet;