import '../css/basic.scss';
import { RandomGenerator } from "./randomGenerator";
import { buttonOne, buttonTwo, secretPara } from "./domSelector.js";



const outPutRandomOne = () => {
    secretPara.textContent = RandomGenerator.randomInteger();
}

const outPutRandomTwo = () => {
    secretPara.textContent = RandomGenerator.randomRange(1,34);
}

buttonOne.addEventListener('click', outPutRandomOne);
buttonTwo.addEventListener('click', outPutRandomTwo);
