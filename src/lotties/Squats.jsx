import { useLottie, useLottieInteractivity } from "lottie-react";
import squats from "./squats.json";
import squatgirl from "./squatgirl.json";

const style = {
    height: 200,
    width: 200,
    // border: 1,
    // borderStyle: "solid",
    borderRadius: 4,
  };
const options = {
    animationData: squatgirl,
  };

const Squats = () => {
        //SQUATS
        const lottieObj = useLottie(options, style);
        const Animation = useLottieInteractivity({
          lottieObj,
          mode: "scroll",
          actions: [
            {
              visibility: [0, 1],
              type: "seek",
              frames: [0, 170], //squats = 33
            },
          ],
        });
        return Animation;
}
export default Squats;