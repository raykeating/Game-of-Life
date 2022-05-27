import { Universe } from './pkg';

const pre = document.getElementById("game-canvas");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
  
    setTimeout(() => requestAnimationFrame(renderLoop), 50);
};

requestAnimationFrame(renderLoop);