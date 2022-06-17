import React from 'react';
import Scroll from "./Scroll";
import Jump from './Jump';
import Sloth from './Sloth';
import Squats from './Squats';
import Walk from "./Walk";



export const Animaciones = () => {
  return (<>
  <Scroll/><Walk/>
  <div id='gym' style={{display:'flex',border:1,borderStyle:'solid'}}>
      <Sloth/><Jump/><Squats/>
  </div>
  </>
    
  )
}
