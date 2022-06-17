import { useLottie, useLottieInteractivity } from "lottie-react";
import caballo from './caballo.json';

// lottie-react --> https://lottiereact.com/
const style = {
    height: '100vh',
    border: 1,
    borderStyle: "solid",
    borderRadius: 4,
  };
const options = {
    animationData: caballo,
  };
  
  const Caballo = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [0.3, 1],
          type: "seek",
          frames: [0, 79],
        },
      ],
    });
  
    return Animation;
  };
  
  export default Caballo;