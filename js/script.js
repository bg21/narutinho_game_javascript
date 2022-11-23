var character = document.getElementById("narutinho");
var block = document.querySelector("#kunai");
let game = document.querySelector("#game");
let gameStart = document.querySelector("#game h2:first-child");
let gameOver = document.querySelector("#game h2:last-child");
var pontuacao = document.querySelector("#pontuacao");
let interval = null;
let pontuacaoNaruto = 0;



let placar = () => {
    pontuacaoNaruto++;
    pontuacao.innerHTML = "<h2>Pontuação: " + pontuacaoNaruto + "</h2>";
}

window.addEventListener("keydown", function start(e) {

    if (e.code == "Space") {
        game.style.display = "none";
        block.classList.add("animate_kunai");


        character.src = "./imgs/run_naruto_run.gif";
        character.style.width = "150px";
        character.style.height = "102px";
        //score
        pontuacaoNaruto = null;
        interval = setInterval(placar, 200);
    } 
});

//pular
window.addEventListener("keydown", function pular(e) {
    // if (character.classList == "animate") {
    //     return
    // }

    // character.classList.add("animate");
    // setTimeout(function () {
    //     character.classList.remove("animate");
    // }, 300);



    if (e.key == "ArrowUp")
        if (character.classList != "animate") {
            character.classList.add("animate");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                character.classList.remove("animate");
            }, 300);
        }

});




var verifica = setInterval(function () {

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));


    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        game.style.display = "block";
        gameOver.style.display = "block";
        gameStart.style.display = "none";

        block.classList.remove("animate_kunai");
            
            
        character.src = "./imgs/sad_naruto.png";
        character.style.width = "84px";
        character.style.height = "116px";


        pontuacaoNaruto = 0;

        clearInterval(interval);

    }
}, 10);


// document.addEventListener("keydown", pular);