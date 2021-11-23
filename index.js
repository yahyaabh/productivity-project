

let clock = document.getElementById("clock");
let list = document.getElementById("list");
let quotes = document.getElementById("quotes");
let timer = document.getElementById("timer");
let reset = document.getElementById("reset");

let todo = document.getElementById("to-do");

let quotesBig = document.getElementById("quotes-big")

let countDown = document.getElementById("time-box");


/*
setInterval(function() {
        let mins = Math.floor(time/60);
        let sec = time % 60;
        countDown.innerHTML = `${mins}: ${sec}`;
        time--;},1000)
*/
    
timer.style.display = "none";

clock.addEventListener("click", function() {
    if(timer.style.display == "none") {
        timer.style.display = "block";
    }
    else{
        timer.style.display = "none";
    }
})

let start = document.getElementById("start");
let stop = document.getElementById("stop");

let enter = document.getElementById("enter");
let inputBox = document.getElementById("mins-input")

let time = 0;
enter.addEventListener("click",function() {
    time =  inputBox.value * 60;
    console.log(time);
})
console.log(time)

let handle = undefined;
startTimer = () => {
    
     handle = setInterval(function() {
        let mins = Math.floor(time/60);
        let sec = time % 60;
        countDown.innerHTML = `${mins}: ${sec}`;
        time--;},1000)
}


start.addEventListener("click",startTimer) 
;

stop.addEventListener("click", function() {
    clearInterval(handle)
})

reset.addEventListener("click", function() {
    clearInterval(handle);
    time = 0;
    countDown.innerHTML = `${00}: ${00}`
})


todo.style.display = "none";

list.addEventListener("click" ,function(){
    if(todo.style.display == "none") {
        todo.style.display = "block";
    }
    else{
        todo.style.display = "none";
    }
})
;

quotesBig.style.display = "none";

quotes.addEventListener("click" ,function(){
    if(quotesBig.style.display == "none") {
        quotesBig.style.display = "block";
    }
    else{
        quotesBig.style.display = "none";
    }
})

let phrase = document.getElementById("phrase");

let array = [
     "We grow fearless when we do the things we fear.",
    "And, when you want something, all the universe conspires in helping you to achieve it.",
     "If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.",
     "You can't be great if you don't feel great. Make exceptional health your number one priority.",
     "Impossible is just an opinion.",
     "The secret of getting ahead is getting started.",
    "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
    "All our dreams can come true if we have the courage to pursue them.",
     "Life isn’t about getting and having, it’s about giving and being.", 
    "Whatever the mind of man can conceive and believe, it can achieve.", 
    "Strive not to be a success, but rather to be of value.", 
     "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", 
    "I attribute my success to this: I never gave or took any excuse.",
    "You miss 100% of the shots you don’t take.",  
    "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", 
    "The most difficult thing is the decision to act, the rest is merely tenacity.",
    "Every strike brings me closer to the next home run.",  
    "Definiteness of purpose is the starting point of all achievement.",
    "We must balance conspicuous consumption with conscious capitalism.",
    "Life is what happens to you while you’re busy making other plans.",
    "We become what we think about.",  
]


let generator = document.getElementById("random");
let num = 0;
generator.addEventListener("click", function() {
    phrase.innerHTML = array[num];
    num++;
    if (num > array.length) {
        num = 0;
    }
})

let addToDo= document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let ToDos = document.getElementById("ToDos");
let it = document.getElementById("to-do")

addToDo.addEventListener("click", function() {
    let p = document.createElement("p");
    p.innerText = inputField.value
    it.appendChild(p);
    inputField.value = "";
    p.addEventListener("click", function(){
        p.style.textDecoration = "line-through";
    }
    )
    p.addEventListener("dblclick", function() {
        it.removeChild(p)
    })
})