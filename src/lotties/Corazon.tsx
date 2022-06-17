import { useLottie, useLottieInteractivity } from "lottie-react";
import like from "./likeButton.json";  
import $ from "jquery";
// BUSCANDO LA MANERA DE PASAR LA FUNCION JQUERY A REACT
function handleScrollClick(e: any) {
  var delta = -1.5;
  console.log(delta);
  var time = 6000;
  var distance = 600;

  $('html, body').stop().animate({
      scrollTop: $(window).scrollTop()
                - (distance * delta)
  }, time);
}

const style = {
  height: 300,
  border: 1,
  borderStyle: "solid",
  borderRadius: 4,
};
const options = {
  animationData: like,
  onClick: handleScrollClick,
};

const Corazon = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames: [0, 38],
      },
    ],
  });

  return <div id="corazon">{Animation}</div>;
};

export default Corazon;
