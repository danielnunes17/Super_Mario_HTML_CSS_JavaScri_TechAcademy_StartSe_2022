const mario = document.querySelector(".super-mario");
const pipeflower = document.querySelector(".pipe-flower");
const koopa = document.querySelector(".koopa18");
const ghost = document.querySelector(".ghost");
const flexContainer = document.querySelector(".flex-container");
const jumpSound = document.querySelector("#jumpsound");


//função sem parametros, ANONIMA

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {
    const pipePosition = pipeflower.offsetLeft;
    const koopaPosition = koopa.offsetLeft;
    const ghostPosition = ghost.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario)
        .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 120) {
        pipeflower.style.animation = "none";
        pipeflower.style.left = '${pipePosition}px';

        mario.style.animation = "none";
        mario.style.bottom = '${marioPosition}px';

        mario.src = "./IMAGE/mario-game-over.png";
        mario.style.width = "60px";
        mario.style.marginLeft = "40px";

        clearInterval(loopGame)
    } else if (koopaPosition <= 120 && koopaPosition > 0 && marioPosition < 120) {
        koopa.style.animation = "none";
        koopa.style.left = '${koopaPosition}px';

        mario.style.animation = "none";
        mario.style.bottom = '${marioPosition}px';

        mario.src = "./IMAGE/mario-game-over.png";
        mario.style.width = "60px";
        mario.style.marginLeft = "40px";

        clearInterval(loopGame)
    } if (ghostPosition <= 120 && ghostPosition > 0 && marioPosition < 120) {
        ghost.style.animation = "none";
        ghost.style.left = '${koopaPosition}px';

        mario.style.animation = "none";
        mario.style.bottom = '${marioPosition}px';

        mario.src = "./IMAGE/mario-game-over.png";
        mario.style.width = "60px";
        mario.style.marginLeft = "40px";

        clearInterval(loopGame)
    }

}, 20);
document.addEventListener("keydown", jump);

