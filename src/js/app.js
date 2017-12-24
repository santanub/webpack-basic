import { secretButton, secretPara } from "./domSelector.js";
var secretFalse = false;

secretButton.addEventListener('click', toggleSecret);

function toggleSecret(){
    secretFalse = !secretFalse;
    updatePara();
}

function updatePara(){
    if(secretFalse) {
        secretPara.style.display = 'block';
        secretButton.textContent = "Hide Secret";
    } else {
        secretPara.style.display = 'none';
        secretButton.textContent = "Show Secret";
    }
}