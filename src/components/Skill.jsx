import React from 'react';

const Skill = ({skill}) => {
    return ( 
        <label for = {skill.rawName} id = {skill.card} className = {`card-t ${skill.card}`}>
            <i className = {skill.icon}></i>
            <input type="radio" name="skill" id = {skill.rawName} style = {{display: 'none'}}/>
        </label>
     );
}
 
export default Skill;