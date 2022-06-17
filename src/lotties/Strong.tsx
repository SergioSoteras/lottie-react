import { useLottie, useLottieInteractivity } from "lottie-react";
import sloth from "./sloth.json";
import strong from "./weightlifter.json";


const style = {
    height: 200,
    width: 200,
    // border: 1,
    // borderStyle: "solid",
    borderRadius: 4,
  };
const options = {
    animationData: strong,
  };

  const Strong = () => {
    //PESAS
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
        {
          visibility: [0.4, 1],
          type: "seek",
          frames: [0, 84],
        },
      ],
    });


    return Animation;
  };
  
  export default Strong;