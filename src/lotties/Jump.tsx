import { useLottie, useLottieInteractivity } from "lottie-react";
import jump from "./jump.json";

const style = {
    height: 200,
    widht: 200,
    // border: 1,
    // borderStyle: "solid",
    borderRadius: 4,
  };
const options = {
    animationData: jump,
  };

const Jump = () => {
        //SALTOS
        const lottieObj = useLottie(options, style);
        const Animation = useLottieInteractivity({
          lottieObj,
          mode: "scroll",
          actions: [
            {
              visibility: [0.1, 1],
              type: "seek",
              frames: [0, 60],
            },
          ],
        });

        return Animation;
}
export default Jump;
