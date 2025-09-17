var randomNumber1 = Math.ceil(Math.random()*6)
var randomNumber2 = Math.ceil(Math.random()*6)

img1 = document.querySelector(".img1")
img2 = document.querySelector(".img2")
img1.setAttribute("src","./assets/dice"+randomNumber1+".png")
img2.setAttribute("src","./assets/dice"+randomNumber2+".png")

if(randomNumber1 > randomNumber2)
{
document.querySelector("#player1").textContent = "🟢Player 1";
document.querySelector("#player2").textContent = "🔴Player 2";
}
else if(randomNumber1 < randomNumber2)
{
document.querySelector("#player2").textContent = "🟢Player 2";
document.querySelector("#player1").textContent = "🔴Player 1";
}
else if(randomNumber1 === randomNumber2)
{
document.querySelector("#player1").textContent = "🟢Player 1"
document.querySelector("#player2").textContent = "🟢Player 2"
}

const heading = document.querySelector('h1')
heading.addEventListener("click",
    () => {location.reload();}
);
