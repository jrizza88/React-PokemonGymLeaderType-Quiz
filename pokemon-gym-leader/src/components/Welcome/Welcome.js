
import React from 'react';

const Welcome = ({trainer}) => {
  return (
    <div key={trainer.id}>
     Welcome trainer  {trainer.trainer}!
    </div>
  );
};

export default Welcome;