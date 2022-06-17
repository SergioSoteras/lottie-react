import React from 'react';
import Jump from './Jump';
import Squats from './Squats';
import Strong from './Strong';
import Caballo from './Caballo';
import Corazon from './Corazon';



export const Animaciones = () => {
  return (<>
  <Corazon/><Caballo/>
  <div id='gym' style={{display:'flex',border:1,borderStyle:'solid'}}>
      <Strong/><Jump/><Squats/>
  </div>
  </>
    
  )
}
