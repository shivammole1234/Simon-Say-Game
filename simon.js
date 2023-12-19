let game_seq = [];
let user_seq = [];
let col_btns = ["yellow", "red", "blue", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started ");
        started = true;
        levelup();
    }
});

function game_flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 100);
}

function user_flash(btn) {
    btn.classList.add("user_flash");
    setTimeout(function () {
        btn.classList.remove("user_flash")
    }, 100);
}

function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
    // rondom button chossing
    let randomIndex = Math.floor(Math.random() * col_btns.length);
    let randcolor = col_btns[randomIndex];
    let randbtn = document.querySelector(`.${randcolor}`);
    // console.log(randomIndex);
    // console.log(randomIndex);
    // console.log(randbtn);
    game_seq.push(randcolor);
    console.log(game_seq);
    game_flash(randbtn);
}


function check_ans() {
    console.log(`curent level :`, level);
    let index = level - 1;
    if (user_seq[index] === game_seq[index]) {
        console.log("same sequence");
        if (user_seq.length === game_seq.length) {
            setTimeout(levelup, 500);
        }
    }
    else {
        h2.innerHTML = `game over ! your score was <b> ${level}</b> <br> press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "black";
        }, 150);
        reset_game();
    }
}


function btn_press() {
    // console.log(this);
    let btn = this;
    user_flash(btn);

    user_color = btn.getAttribute("id");
    user_seq.push(user_color);
    check_ans(btn);

}

let btn_all = document.querySelectorAll(".btn");

for (btn of btn_all) {
    btn.addEventListener("click", btn_press);
}

function reset_game() {
    started = false;
    game_seq = [];
    user_seq = [];
    level = 0;
}