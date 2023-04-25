import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import "./src/styles/elements/base.css";
import ScoreBoard from './src/objects/scoreboard';
import BoardGame from './src/objects/BoardGame';
import vsPlayer from './src/components/VsPlayer';




const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${vsPlayer()}
    ${ScoreBoard()}
    ${BoardGame(6)}
    
    `
    
);

