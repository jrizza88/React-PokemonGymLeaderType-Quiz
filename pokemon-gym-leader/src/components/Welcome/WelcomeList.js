import React from 'react';
import Welcome from "./Welcome";

const WelcomeList = ({nameProp}) => {
    return (
        <div>
           {nameProp.map(name => (
           
           <Welcome key={name.id}  trainer={name} />   
           ))}
        </div>
    
    )
}

export default WelcomeList;